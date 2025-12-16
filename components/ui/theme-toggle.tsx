"use client";

import * as React from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const t = useTranslations("common");

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon">
        <IconSun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">{t("toggleTheme")}</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <IconSun className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <IconMoon className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      <span className="sr-only">{t("toggleTheme")}</span>
    </Button>
  );
}
