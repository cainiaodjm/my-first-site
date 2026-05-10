"use client";
import { useState } from "react";
import Link from "next/link";

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState("");

  const getMatches = () => {
    try {
      const matches = [...text.matchAll(new RegExp(pattern, flags))];
      return matches.map((m) => m[0]);
    } catch {
      return [];
    }
  };

  const matches = pattern ? getMatches() : [];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-gray-600 mb-6 inline-block"
        >
          ← Back
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Regex Tester</h1>
        <p className="text-gray-500 mb-8">
          Test and debug regular expressions in real time.
        </p>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-4">
          <div className="flex gap-4">
            <input
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black font-mono"
              placeholder="Regex pattern..."
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
            />
            <input
              className="w-20 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black font-mono"
              placeholder="flags"
              value={flags}
              onChange={(e) => setFlags(e.target.value)}
            />
          </div>
          <textarea
            className="w-full h-48 border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-black text-sm"
            placeholder="Test string..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              Matches ({matches.length})
            </p>
            <div className="bg-gray-50 rounded-xl p-4 min-h-16 text-sm font-mono">
              {matches.length > 0 ? (
                matches.map((m, i) => (
                  <span
                    key={i}
                    className="inline-block bg-yellow-100 text-yellow-800 rounded px-2 py-0.5 mr-2 mb-2"
                  >
                    {m}
                  </span>
                ))
              ) : (
                <span className="text-gray-400">No matches</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
