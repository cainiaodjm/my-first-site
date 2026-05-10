import Link from "next/link";

const tools = [
  {
    href: "/json-formatter",
    icon: "ti-braces",
    name: "JSON Formatter",
    desc: "Format and validate JSON instantly",
  },
  {
    href: "/base64-encoder",
    icon: "ti-code",
    name: "Base64 Encoder",
    desc: "Encode and decode Base64 strings",
  },
  {
    href: "/timestamp",
    icon: "ti-clock",
    name: "Timestamp Converter",
    desc: "Convert Unix timestamps to dates",
  },
  {
    href: "/regex-tester",
    icon: "ti-regex",
    name: "Regex Tester",
    desc: "Test and debug regular expressions",
  },
  {
    href: "/color-picker",
    icon: "ti-palette",
    name: "Color Picker",
    desc: "Pick colors and convert HEX/RGB/HSL",
  },
  {
    href: "/qrcode",
    icon: "ti-qrcode",
    name: "QR Code Generator",
    desc: "Generate QR codes instantly",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Developer Tools
        </h1>
        <p className="text-gray-500 mb-10">
          Free online tools — fast, simple, no login required.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-400 transition-colors"
            >
              <p className="text-2xl mb-3 text-gray-500">
                <i className={`ti ${tool.icon}`}></i>
              </p>
              <h2 className="text-base font-semibold text-gray-900 mb-1">
                {tool.name}
              </h2>
              <p className="text-sm text-gray-500">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
