"use client";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "../../../i18n/routing";

const langNames: Record<string, string> = {
  en: "English",
  zh: "简体中文",
  "zh-TW": "繁體中文",
  ja: "日本語",
};

function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLang = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <select
      value={locale}
      onChange={(e) => switchLang(e.target.value)}
      className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white text-gray-700 outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer"
    >
      {routing.locales.map((l) => (
        <option key={l} value={l}>
          {langNames[l]}
        </option>
      ))}
    </select>
  );
}

export default function ToolLayout({
  title,
  desc,
  emoji,
  children,
  backLabel,
}: {
  title: string;
  desc: string;
  emoji: string;
  children: React.ReactNode;
  backLabel: string;
}) {
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-6 py-3 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href={`/${locale}`}
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              ← {backLabel}
            </Link>
            <span className="text-gray-200">|</span>
            <Link
              href={`/${locale}`}
              className="font-bold text-base text-gray-900"
            >
              🛠️ DevTools
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-sm font-medium text-gray-600">
              {emoji} {title}
            </h1>
            <LangSwitcher />
          </div>
        </div>
      </header>

      {/* Content - full width */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-6">
        <p className="text-sm text-gray-400 mb-4">{desc}</p>
        {children}
      </main>

      <footer className="border-t border-gray-100 py-4 text-center text-sm text-gray-400">
        © 2025 DevTools
      </footer>
    </div>
  );
}
