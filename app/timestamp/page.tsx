"use client";
import { useState, useEffect } from "react";
import ToolLayout from "../components/ToolLayout";

export default function Timestamp() {
  const [now, setNow] = useState(0);
  const [ts, setTs] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    setNow(Math.floor(Date.now() / 1000));
    const t = setInterval(() => setNow(Math.floor(Date.now() / 1000)), 1000);
    return () => clearInterval(t);
  }, []);

  const convert = () => {
    const d = new Date(Number(ts) * 1000);
    setResult(isNaN(d.getTime()) ? "Invalid timestamp" : d.toString());
  };

  return (
    <ToolLayout
      title="Timestamp Converter"
      desc="Convert Unix timestamps to human-readable dates."
      emoji="🕐"
    >
      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <p className="text-sm font-medium text-gray-500 mb-1">
            Current Unix Timestamp
          </p>
          <p className="text-4xl font-mono font-bold text-gray-900">{now}</p>
          <button
            onClick={() => navigator.clipboard.writeText(String(now))}
            className="mt-3 text-xs text-green-600 hover:underline"
          >
            Copy
          </button>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Convert timestamp to date
          </label>
          <div className="flex gap-3">
            <input
              className="flex-1 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 font-mono text-sm bg-white"
              placeholder="e.g. 1700000000"
              value={ts}
              onChange={(e) => setTs(e.target.value)}
            />
            <button
              onClick={convert}
              className="px-5 py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors text-sm font-medium"
            >
              Convert
            </button>
          </div>
          {result && (
            <p className="mt-3 p-4 bg-white border border-gray-200 rounded-xl text-sm font-mono">
              {result}
            </p>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
