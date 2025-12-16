import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { Box } from "@/components/ui/box";

export default function LobbyPage() {
  const t = useTranslations("common");

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
      <main className="container mx-auto px-8 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8"></div>
        <Box p={"sm"}>
          <Typography variant="h1" className="mb-4">
            {t("welcome")}
          </Typography>
          <Typography variant="lead">{t("startBuilding")}</Typography>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/dashboard">Explore</Link>
            </Button>
          </div>
        </Box>
      </main>
    </div>
  );
}
