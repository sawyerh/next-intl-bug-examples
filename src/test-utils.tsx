import React from "react";
import { render } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import messages from "./i18n/messages/en-US/index.json";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextIntlClientProvider locale="en" messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: AppProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
