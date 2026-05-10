"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
    } catch (error) {
      setOutput("Invalid JSON");
    }
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">JSON Formatter</h1>

        <textarea
          className="w-full h-64 p-4 border rounded-lg mb-4"
          placeholder="Paste your JSON here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={formatJSON}
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          Format JSON
        </button>

        <pre className="mt-6 p-4 bg-white rounded-lg overflow-auto">
          {output}
        </pre>
      </div>
    </div>
  );
}
