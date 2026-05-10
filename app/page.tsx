"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
    } catch {
      setOutput("Invalid JSON");
    }
  };

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
    alert("Copied!");
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          JSON Formatter
        </h1>

        <p className="text-gray-600 mb-10">
          Format, validate, and beautify JSON instantly.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <textarea
            className="w-full h-72 border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-black"
            placeholder="Paste JSON here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex gap-4 mt-4">
            <button
              onClick={formatJSON}
              className="px-6 py-3 bg-black text-white rounded-xl hover:opacity-90"
            >
              Format JSON
            </button>

            <button
              onClick={copyOutput}
              className="px-6 py-3 border rounded-xl hover:bg-gray-100"
            >
              Copy Result
            </button>
          </div>

          <pre className="mt-6 bg-gray-100 rounded-xl p-4 overflow-auto text-sm">
            {output}
          </pre>
        </div>
      </div>
    </main>
  );
}
