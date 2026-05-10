"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import ToolLayout from "../components/ToolLayout";

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState("");
  const t = useTranslations("regex");
  const tNav = useTranslations("nav");

  const getMatches = () => {
    try {
      return [...text.matchAll(new RegExp(pattern, flags))].map((m) => m[0]);
    } catch {
      return [];
    }
  };

  const matches = pattern && text ? getMatches() : [];

  return (
    <ToolLayout
      title={t("title")}
      desc={t("desc")}
      emoji="🔍"
      backLabel={tNav("home")}
    >
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            {t("pattern")}
          </label>
          <div className="flex gap-3">
            <input
              className="flex-1 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 font-mono text-sm bg-white"
              placeholder="e.g. \d+"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
            />
            <input
              className="w-24 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 font-mono text-sm bg-white text-center"
              placeholder="flags"
              value={flags}
              onChange={(e) => setFlags(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            {t("testStr")}
          </label>
          <textarea
            className="w-full h-40 border border-gray-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-orange-500 text-sm bg-white resize-none"
            placeholder={t("placeholder")}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm font-medium text-gray-700">
              {t("matches")}
            </label>
            <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-medium">
              {matches.length}
            </span>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4 min-h-16">
            {matches.length > 0 ? (
              matches.map((m, i) => (
                <span
                  key={i}
                  className="inline-block bg-orange-50 text-orange-700 border border-orange-200 rounded-lg px-2 py-1 mr-2 mb-2 text-sm font-mono"
                >
                  {m}
                </span>
              ))
            ) : (
              <span className="text-gray-400 text-sm">No matches yet</span>
            )}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
