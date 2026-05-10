"use client";
import { useState } from "react";
import Link from "next/link";

export default function Timestamp() {
  const [ts, setTs] = useState("");
  const [date, setDate] = useState("");

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
          Timestamp Converter
        </h1>
        <p className="text-gray-500 mb-8">
          Convert Unix timestamps to human-readable dates and vice versa.
        </p>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-6">
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              Current timestamp
            </p>
            <p className="text-2xl font-mono">
              {Math.floor(Date.now() / 1000)}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              Unix timestamp → Date
            </p>
            <div className="flex gap-4">
              <input
                className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black font-mono"
                placeholder="e.g. 1700000000"
                value={ts}
                onChange={(e) => setTs(e.target.value)}
              />
              <button
                onClick={() => setDate(new Date(Number(ts) * 1000).toString())}
                className="px-6 py-3 bg-black text-white rounded-xl hover:opacity-90"
              >
                Convert
              </button>
            </div>
            {date && (
              <p className="mt-3 p-3 bg-gray-50 rounded-xl text-sm font-mono">
                {date}
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
