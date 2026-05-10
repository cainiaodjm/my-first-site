"use client";
import { useState } from "react";
import ToolLayout from "../components/ToolLayout";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState(false);

  const formatJSON = () => {
    try {
      setOutput(JSON.stringify(JSON.parse(input), null, 2));
      setError(false);
    } catch {
      setOutput("Invalid JSON — please check your input.");
      setError(true);
    }
  };

  return (
    <ToolLayout
      title="JSON Formatter"
      desc="Format, validate, and beautify JSON instantly."
      emoji="🔧"
    >
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Input JSON
          </label>
          <textarea
            className="w-full h-56 border border-gray-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm bg-white resize-none"
            placeholder='{ "key": "value" }'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <button
            onClick={formatJSON}
            className="px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Format JSON
          </button>
          <button
            onClick={() => {
              setInput("");
              setOutput("");
            }}
            className="px-5 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium text-gray-600"
          >
            Clear
          </button>
          {output && !error && (
            <button
              onClick={() => navigator.clipboard.writeText(output)}
              className="px-5 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium text-gray-600"
            >
              Copy Result
            </button>
          )}
        </div>
        {output && (
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Output
            </label>
            <pre
              className={`rounded-xl p-4 overflow-auto text-sm font-mono leading-relaxed ${error ? "bg-red-50 text-red-600 border border-red-200" : "bg-white border border-gray-200"}`}
            >
              {output}
            </pre>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
