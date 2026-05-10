"use client";
import { useRouter } from "next/navigation";
import { routing } from "../../../i18n/routing";

const langNames: Record<string, string> = {
  en: "English",
  zh: "简体中文",
  "zh-TW": "繁體中文",
  ja: "日本語",
};

export default function LangSwitcherHome({
  currentLocale,
}: {
  currentLocale: string;
}) {
  const router = useRouter();

  return (
    <select
      value={currentLocale}
      onChange={(e) => router.push(`/${e.target.value}`)}
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
