"use client";

import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";

// Main Product Loading Skeleton with Progress Bar
export function ProductLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="space-y-4 w-full max-w-md px-4">
        {/* Loading Text */}
        <div className="text-center space-y-2">
          <Typography variant={"large"}>
            You are with Random&apos;s Matrimony
          </Typography>
          <Typography variant={"muted"}>
            Please wait while we do our magic...
          </Typography>
        </div>

        {/* Progress Bar */}
        <div className="relative h-3 bg-muted rounded-md overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-primary"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export function PulseLoading() {
  return (
    <div className="flex justify-center gap-2 pt-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="h-2 w-2 bg-primary rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}
