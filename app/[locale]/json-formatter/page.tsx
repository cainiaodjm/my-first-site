"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import ToolLayout from "../components/ToolLayout";
import JsonView from "@uiw/react-json-view";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [parsed, setParsed] = useState<any>(null);
  const [error, setError] = useState("");
  const t = useTranslations("json");
  const tNav = useTranslations("nav");

  const handleInput = (val: string) => {
    setInput(val);
    if (!val.trim()) {
      setParsed(null);
      setError("");
      return;
    }
    try {
      setParsed(JSON.parse(val));
      setError("");
    } catch (e: any) {
      setParsed(null);
      setError(e.message);
    }
  };

  const format = () => {
    try {
      const p = JSON.parse(input);
      setInput(JSON.stringify(p, null, 2));
      setParsed(p);
      setError("");
    } catch (e: any) {
      setError(e.message);
    }
  };

  const minify = () => {
    try {
      const p = JSON.parse(input);
      setInput(JSON.stringify(p));
      setParsed(p);
      setError("");
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <ToolLayout
      title={t("title")}
      desc={t("desc")}
      emoji="🔧"
      backLabel={tNav("home")}
    >
      {/* Toolbar */}
      <div className="flex gap-2 mb-3 flex-wrap">
        <button
          onClick={format}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          {t("format")}
        </button>
        <button
          onClick={minify}
          className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-600"
        >
          Minify
        </button>
        <button
          onClick={() => navigator.clipboard.writeText(input)}
          className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-600"
        >
          {t("copy")}
        </button>
        <button
          onClick={() => {
            setInput("");
            setParsed(null);
            setError("");
          }}
          className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-600"
        >
          {t("clear")}
        </button>
        {error && (
          <span className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm border border-red-200">
            ❌ {error}
          </span>
        )}
        {parsed && !error && (
          <span className="px-4 py-2 bg-green-50 text-green-600 rounded-lg text-sm border border-green-200">
            ✅ Valid JSON
          </span>
        )}
      </div>

      {/* Editor */}
      <div className="grid grid-cols-2 gap-4" style={{ height: "600px" }}>
        {/* Left: Input */}
        <div className="flex flex-col">
          <p className="text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
            {t("input")}
          </p>
          <textarea
            className="flex-1 border border-gray-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm bg-white resize-none"
            placeholder='{ "key": "value" }'
            value={input}
            onChange={(e) => handleInput(e.target.value)}
            spellCheck={false}
          />
        </div>

        {/* Right: Output */}
        <div className="flex flex-col">
          <p className="text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
            {t("output")}
          </p>
          <div className="flex-1 border border-gray-200 rounded-xl p-4 bg-white overflow-auto">
            {parsed ? (
              <JsonView
                value={parsed}
                style={{ fontSize: "13px", fontFamily: "monospace" }}
                shortenTextAfterLength={50}
                displayDataTypes={false}
                displayObjectSize={false}
              />
            ) : error ? (
              <div className="text-red-500 text-sm font-mono">{error}</div>
            ) : (
              <div className="text-gray-300 text-sm">
                输出结果将显示在这里...
              </div>
            )}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
