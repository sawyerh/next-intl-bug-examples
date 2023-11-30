import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { locales } from "@/i18n/config";

const i18nMiddleware = createIntlMiddleware({
  locales,
  defaultLocale: locales[0],
  // Don't prefix the URLs when the locale is the default locale
  localePrefix: "as-needed",
});

export default function middleware(req: NextRequest) {
  const response = i18nMiddleware(req);
  return response;
}

export const config = {
  // Don't run middleware on API routes or Next.js build output
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
