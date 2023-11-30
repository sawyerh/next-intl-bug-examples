import { getRequestConfig } from "next-intl/server";

export const locales = ["en-US", "es-US"] as const;

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}/index.json`)).default,
}));
