"use client";

import { NextIntlClientProvider } from "next-intl";

const IntlFallbackProvider = ({ children, messages, locale }: any) => {
  const getMessageFallback = ({ key }: { key: string }) => {
    console.error(`Missing translation for key: ${key}`);
    return key;
  };

  const onError = (error: any) => {
    if (error.code === "MISSING_MESSAGE") {
      //   console.error(error.key);
    } else {
      console.error(error);
    }
  };

  return (
    <NextIntlClientProvider
      messages={messages}
      locale={locale}
      getMessageFallback={getMessageFallback}
      onError={onError}
    >
      {children}
    </NextIntlClientProvider>
  );
};

export default IntlFallbackProvider;
