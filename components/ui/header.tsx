"use client";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { UserAvatar } from "../layout/avatar";
import Image from "next/image";
import Link from "next/link";
import {
  IconLayoutDashboard,
  IconUsers,
  IconHeart,
  IconMessageCircle,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const navItems = [
  { href: "/dashboard", label: "dashboard", icon: IconLayoutDashboard },
  { href: "/matches", label: "matches", icon: IconHeart },
  { href: "/search", label: "search", icon: IconUsers },
  { href: "/messages", label: "messages", icon: IconMessageCircle },
];

export function Header() {
  const pathname = usePathname();
  const t = useTranslations("common");

  return (
    <header className="sticky top-0 z-9 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex h-13 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Image
            src="/globe.svg"
            alt="Logo"
            width={32}
            height={32}
            style={{ height: 32, width: "auto" }}
            priority
            className="md:hidden h-8 w-auto"
          />
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={32}
            priority
            style={{ height: 32, width: "auto" }}
            className="hidden md:block h-8 w-auto"
          />
        </div>
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname?.startsWith(item.href);

            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  className="relative flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="headerTab"
                      className="absolute inset-0 bg-primary/10 rounded-md"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                  <div
                    className={`relative z-10 flex items-center gap-2 ${
                      isActive ? "text-primary" : ""
                    }`}
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.div>
                    <span>{t(item.label)}</span>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <UserAvatar></UserAvatar>
        </div>
      </div>
    </header>
  );
}
