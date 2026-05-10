"use client";
import { useState } from "react";
import ToolLayout from "../components/ToolLayout";

export default function ColorPicker() {
  const [color, setColor] = useState("#3b82f6");

  const hex = color;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const rgb = `rgb(${r}, ${g}, ${b})`;
  const hsl = (() => {
    const rr = r / 255,
      gg = g / 255,
      bb = b / 255;
    const max = Math.max(rr, gg, bb),
      min = Math.min(rr, gg, bb);
    let h = 0,
      s = 0,
      l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      if (max === rr) h = ((gg - bb) / d + (gg < bb ? 6 : 0)) / 6;
      else if (max === gg) h = ((bb - rr) / d + 2) / 6;
      else h = ((rr - gg) / d + 4) / 6;
    }
    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
  })();

  const values = [
    { label: "HEX", value: hex },
    { label: "RGB", value: rgb },
    { label: "HSL", value: hsl },
  ];

  return (
    <ToolLayout
      title="Color Picker"
      desc="Pick a color and get HEX, RGB, HSL values instantly."
      emoji="🎨"
    >
      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-center gap-6">
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-16 h-16 rounded-xl border border-gray-200 cursor-pointer p-1 bg-white"
          />
          <div
            className="flex-1 h-16 rounded-xl border border-gray-200"
            style={{ background: color }}
          ></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {values.map(({ label, value }) => (
            <div
              key={label}
              className="bg-white border border-gray-200 rounded-xl p-4"
            >
              <p className="text-xs text-gray-400 mb-1 font-medium">{label}</p>
              <div className="flex items-center justify-between gap-2">
                <p className="font-mono text-sm text-gray-900 truncate">
                  {value}
                </p>
                <button
                  onClick={() => navigator.clipboard.writeText(value)}
                  className="text-xs text-pink-600 hover:underline shrink-0"
                >
                  Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ToolLayout>
  );
}
