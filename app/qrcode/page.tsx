"use client";
import { useState } from "react";
import Link from "next/link";

export default function QRCode() {
  const [text, setText] = useState("");
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;

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
          QR Code Generator
        </h1>
        <p className="text-gray-500 mb-8">
          Generate a QR code for any URL or text instantly.
        </p>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <input
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black mb-6"
            placeholder="Enter URL or text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {text && (
            <div className="flex flex-col items-center gap-4">
              <img
                src={qrUrl}
                alt="QR Code"
                className="rounded-xl border border-gray-200"
              />
              <a
                href={qrUrl}
                download="qrcode.png"
                className="px-6 py-3 bg-black text-white rounded-xl hover:opacity-90 text-sm"
              >
                Download
              </a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
