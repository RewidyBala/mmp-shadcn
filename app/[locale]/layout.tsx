import type { Metadata } from "next";
import { Parkinsans } from "next/font/google";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { locales } from "@/i18n/config";
import "../globals.css";
import { SWRProvider } from "@/providers/swr-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import IntlFallbackProvider from "@/providers/intl-fallback-provider";
import UserProfileProvider from "@/providers/user-profile-provider";
import { auth } from "@/lib/auth";

const parkinsans = Parkinsans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Random Works",
  description: "Random Works!!!!",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();
  const session = await auth();

  return (
    <html
      lang={locale}
      className={parkinsans.variable}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <SWRProvider>
          <SessionProvider session={session}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <IntlFallbackProvider locale={locale} messages={messages}>
                <UserProfileProvider>{children}</UserProfileProvider>
              </IntlFallbackProvider>
            </ThemeProvider>
          </SessionProvider>
        </SWRProvider>
      </body>
    </html>
  );
}
