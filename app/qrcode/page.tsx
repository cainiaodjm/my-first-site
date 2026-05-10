"use client";
import { useState } from "react";
import ToolLayout from "../components/ToolLayout";

export default function QRCode() {
  const [text, setText] = useState("");
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(text)}`;

  return (
    <ToolLayout
      title="QR Code Generator"
      desc="Generate a QR code for any URL or text instantly."
      emoji="📱"
    >
      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            URL or Text
          </label>
          <input
            className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500 text-sm bg-white"
            placeholder="https://example.com"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        {text && (
          <div className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-center gap-4">
            <img
              src={qrUrl}
              alt="QR Code"
              className="rounded-xl"
              width={220}
              height={220}
            />
            <a
              href={qrUrl}
              download="qrcode.png"
              className="px-5 py-2.5 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors text-sm font-medium"
            >
              Download PNG
            </a>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
