import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { routing } from "../../i18n/routing";
import { getTranslations } from "next-intl/server";
import LangSwitcherHome from "./components/LangSwitcherHome";

const toolList = [
  { key: "json-formatter", emoji: "🔧", color: "bg-blue-50 text-blue-600" },
  { key: "base64-encoder", emoji: "🔐", color: "bg-purple-50 text-purple-600" },
  { key: "timestamp", emoji: "🕐", color: "bg-green-50 text-green-600" },
  { key: "regex-tester", emoji: "🔍", color: "bg-orange-50 text-orange-600" },
  { key: "color-picker", emoji: "🎨", color: "bg-pink-50 text-pink-600" },
  { key: "qrcode", emoji: "📱", color: "bg-teal-50 text-teal-600" },
];

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const tTools = await getTranslations({ locale, namespace: "tools" });
  const tNav = await getTranslations({ locale, namespace: "nav" });

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="font-bold text-lg text-gray-900">
            {tNav("brand")}
          </span>
          <LangSwitcherHome currentLocale={locale} />
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">{t("title")}</h1>
        <p className="text-xl text-gray-500 mb-12">{t("desc")}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-left">
          {toolList.map((tool) => (
            <Link
              key={tool.key}
              href={`/${locale}/${tool.key}`}
              className="group border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-gray-300 transition-all"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${tool.color}`}
              >
                {tool.emoji}
              </div>
              <h2 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                {tTools(`${tool.key}.name`)}
              </h2>
              <p className="text-sm text-gray-500">
                {tTools(`${tool.key}.desc`)}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-400">
        © 2025 DevTools
      </footer>
    </div>
  );
}
