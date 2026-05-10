"use client";
import { useState } from "react";
import ToolLayout from "../components/ToolLayout";

export default function Base64() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState(false);

  const encode = () => {
    setOutput(btoa(unescape(encodeURIComponent(input))));
    setError(false);
  };
  const decode = () => {
    try {
      setOutput(decodeURIComponent(escape(atob(input))));
      setError(false);
    } catch {
      setOutput("Invalid Base64 string.");
      setError(true);
    }
  };

  return (
    <ToolLayout
      title="Base64 Encoder / Decoder"
      desc="Encode or decode Base64 strings instantly."
      emoji="🔐"
    >
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Input
          </label>
          <textarea
            className="w-full h-40 border border-gray-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-purple-500 font-mono text-sm bg-white resize-none"
            placeholder="Enter text or Base64 string..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <button
            onClick={encode}
            className="px-5 py-2.5 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors text-sm font-medium"
          >
            Encode
          </button>
          <button
            onClick={decode}
            className="px-5 py-2.5 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors text-sm font-medium"
          >
            Decode
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
        </div>
        {output && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">
                Output
              </label>
              {!error && (
                <button
                  onClick={() => navigator.clipboard.writeText(output)}
                  className="text-xs text-purple-600 hover:underline"
                >
                  Copy
                </button>
              )}
            </div>
            <pre
              className={`rounded-xl p-4 text-sm font-mono break-all whitespace-pre-wrap ${error ? "bg-red-50 text-red-600 border border-red-200" : "bg-white border border-gray-200"}`}
            >
              {output}
            </pre>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
