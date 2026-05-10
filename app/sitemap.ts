import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cainiaodjm.top";
  const locales = ["zh", "en", "zh-TW", "ja"];
  const tools = [
    "json-formatter",
    "base64-encoder",
    "timestamp",
    "regex-tester",
    "color-picker",
    "qrcode",
  ];

  const urls = [];
  for (const locale of locales) {
    urls.push({ url: `${baseUrl}/${locale}`, lastModified: new Date() });
    for (const tool of tools) {
      urls.push({
        url: `${baseUrl}/${locale}/${tool}`,
        lastModified: new Date(),
      });
    }
  }
  return urls;
}
