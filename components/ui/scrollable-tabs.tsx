"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface TabItem {
  id: string;
  label: string;
}

interface ScrollableTabsProps {
  tabs: TabItem[];
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  stickyOffset?: number;
}

export function ScrollableTabContent({
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <>{children}</>;
}

export function ScrollableTabs({
  tabs,
  children,
  className,
  containerClassName,
  stickyOffset = 53,
}: ScrollableTabsProps) {
  const t = useTranslations();
  const [activeTab, setActiveTab] = React.useState(tabs[0]?.id);
  const isManualScroll = React.useRef(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleTabClick = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    isManualScroll.current = true;
    setActiveTab(id);

    const element = document.getElementById(id);
    if (element) {
      const offset = stickyOffset + 52 + 24; // stickyOffset + tab bar height + gap
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    timeoutRef.current = setTimeout(() => {
      isManualScroll.current = false;
    }, 1000);
  };

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -75% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isManualScroll.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    tabs.forEach((tab) => {
      const element = document.getElementById(tab.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tabs]);

  return (
    <div className={cn("flex flex-col gap-6", containerClassName)}>
      {/* Sticky Navigation */}
      <div
        className="sticky top-0 bg-background/80 backdrop-blur-md border-b"
        style={{ top: stickyOffset }}
      >
        <div
          className={cn(
            "flex items-center justify-between p-2 overflow-x-auto no-scrollbar max-w-screen-2xl mx-auto",
            className
          )}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors rounded-md outline-none whitespace-nowrap",
                activeTab === tab.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/10 rounded-md"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{t(tab.label)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="flex flex-col gap-6">
        {React.Children.map(children, (child, index) => {
          const tab = tabs[index];
          if (!tab) return child;

          return (
            <section
              key={tab.id}
              id={tab.id}
              className={cn(
                "scroll-mt-20",
                index === tabs.length - 1 && "pb-[40vh]"
              )}
              style={{ scrollMarginTop: stickyOffset + 52 }}
            >
              {child}
            </section>
          );
        })}
      </div>
    </div>
  );
}
