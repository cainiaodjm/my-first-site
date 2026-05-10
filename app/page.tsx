import Link from "next/link";

const tools = [
  {
    href: "/json-formatter",
    emoji: "🔧",
    name: "JSON Formatter",
    desc: "Format and validate JSON instantly",
    color: "bg-blue-50 text-blue-600",
  },
  {
    href: "/base64-encoder",
    emoji: "🔐",
    name: "Base64 Encoder",
    desc: "Encode and decode Base64 strings",
    color: "bg-purple-50 text-purple-600",
  },
  {
    href: "/timestamp",
    emoji: "🕐",
    name: "Timestamp Converter",
    desc: "Convert Unix timestamps to dates",
    color: "bg-green-50 text-green-600",
  },
  {
    href: "/regex-tester",
    emoji: "🔍",
    name: "Regex Tester",
    desc: "Test and debug regular expressions",
    color: "bg-orange-50 text-orange-600",
  },
  {
    href: "/color-picker",
    emoji: "🎨",
    name: "Color Picker",
    desc: "Pick colors and convert HEX/RGB/HSL",
    color: "bg-pink-50 text-pink-600",
  },
  {
    href: "/qrcode",
    emoji: "📱",
    name: "QR Code Generator",
    desc: "Generate QR codes instantly",
    color: "bg-teal-50 text-teal-600",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="font-bold text-lg text-gray-900">🛠️ DevTools</span>
          <span className="text-sm text-gray-400">
            Free · No login · Instant
          </span>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Free Developer Tools
        </h1>
        <p className="text-xl text-gray-500 mb-12">
          Simple, fast, browser-based tools for everyday dev tasks.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-left">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-gray-300 transition-all"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${tool.color}`}
              >
                {tool.emoji}
              </div>
              <h2 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                {tool.name}
              </h2>
              <p className="text-sm text-gray-500">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-400">
        © 2025 DevTools · All tools are free and run in your browser
      </footer>
    </div>
  );
}
