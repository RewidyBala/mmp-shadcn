"use client";

import * as React from "react";
import { IconLanguage } from "@tabler/icons-react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { useTransition } from "react";

export function LanguageSwitcher() {
  const router = useRouter();
  const currentLocale = useLocale() as Locale;
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (locale: Locale) => {
    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000;SameSite=Lax`;
      router.refresh();
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <IconLanguage className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => handleLocaleChange(locale)}
            className={currentLocale === locale ? "font-bold" : ""}
          >
            {localeNames[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
