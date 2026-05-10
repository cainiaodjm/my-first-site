"use client";
import { useState } from "react";
import Link from "next/link";

export default function ColorPicker() {
  const [color, setColor] = useState("#3b82f6");

  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };

  const { r, g, b } = hexToRgb(color);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-gray-600 mb-6 inline-block"
        >
          ← Back
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Color Picker</h1>
        <p className="text-gray-500 mb-8">
          Pick a color and get HEX, RGB values instantly.
        </p>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-6 mb-8">
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-20 h-20 rounded-xl border border-gray-200 cursor-pointer"
            />
            <div
              className="w-full h-20 rounded-xl"
              style={{ background: color }}
            ></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "HEX", value: color },
              { label: "RGB", value: `rgb(${r}, ${g}, ${b})` },
            ].map(({ label, value }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-400 mb-1">{label}</p>
                <div className="flex items-center justify-between">
                  <p className="font-mono text-sm">{value}</p>
                  <button
                    onClick={() => navigator.clipboard.writeText(value)}
                    className="text-xs text-gray-400 hover:text-gray-700"
                  >
                    Copy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
