"use client";
import { useState } from "react";
import Link from "next/link";

export default function Base64() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-gray-600 mb-6 inline-block"
        >
          ← Back
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Base64 Encoder / Decoder
        </h1>
        <p className="text-gray-500 mb-8">
          Encode or decode Base64 strings instantly.
        </p>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <textarea
            className="w-full h-48 border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-black font-mono text-sm"
            placeholder="Enter text or Base64 string..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setOutput(btoa(input))}
              className="px-6 py-3 bg-black text-white rounded-xl hover:opacity-90"
            >
              Encode
            </button>
            <button
              onClick={() => {
                try {
                  setOutput(atob(input));
                } catch {
                  setOutput("Invalid Base64");
                }
              }}
              className="px-6 py-3 border rounded-xl hover:bg-gray-100"
            >
              Decode
            </button>
            <button
              onClick={() => navigator.clipboard.writeText(output)}
              className="px-6 py-3 border rounded-xl hover:bg-gray-100"
            >
              Copy
            </button>
          </div>
          <pre className="mt-6 bg-gray-50 rounded-xl p-4 overflow-auto text-sm font-mono break-all">
            {output}
          </pre>
        </div>
      </div>
    </main>
  );
}
