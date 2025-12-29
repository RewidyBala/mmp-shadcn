"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import {
  IconAward,
  IconClock,
  IconDeviceMobile,
  IconEdit,
  IconLogout,
  IconUserScan,
  IconPhone,
  IconSquareRoundedPercentage,
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CircularProgress } from "./profileCOmpletion";

const lift = {
  rest: { y: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.08)" },
  hover: {
    y: -4,
    boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

export function NameCard() {
  const profileImages = [
    "/user/user-1.jpg",
    "/user/user-1.jpg",
    "/user/user-1.jpg",
  ];

  return (
    <div className="grid lg:grid-cols-4 gap-6">
      <div className="relative aspect-3/4 rounded-lg overflow-hidden cursor-pointer group max-w-sm max-h-150">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="rounded-lg h-full w-full"
        >
          {profileImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={`Profile ${index + 1}`}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Button
          variant="default"
          size="icon"
          className="absolute bottom-4 right-4 h-10 w-10 shadow-lg z-10 transition-opacity"
        >
          <IconEdit className="h-4 w-4" />
        </Button>
      </div>

      {/* Card Content */}
      <Card className="lg:col-span-3 flex flex-col h-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-6 w-1 rounded-lg bg-primary" />
            <Typography variant={"h3"}>Balasubramani Athappan</Typography>
          </div>

          <div className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Button variant="outline">
                <IconUserScan />
                <span className="hidden md:inline">Preview</span>
              </Button>
            </motion.div>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col justify-between flex-1 space-y-6">
          {/* Profile Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1">
              <Typography variant="muted" className="mb-2">
                Age & Height
              </Typography>
              <Typography variant={"small"}>24 years</Typography>
              <Typography variant={"small"}>5'8"</Typography>
            </div>

            <div className="space-y-1">
              <Typography variant="muted" className="mb-2">
                Caste & Community
              </Typography>
              <Typography variant={"small"}>Hindu</Typography>
              <Typography variant={"small"}>Kongu Vellala Gounder</Typography>
            </div>

            <div className="space-y-1">
              <Typography variant="muted" className="mb-2">
                Education
              </Typography>
              <Typography variant={"small"}>BE</Typography>
              <Typography variant={"small"}>Software professional</Typography>
            </div>

            <div className="space-y-1">
              <Typography variant="muted" className="mb-2">
                Location
              </Typography>
              <Typography variant={"small"}>Aravakurichi</Typography>
              <Typography variant={"small"}>Karur, Tamilnadu</Typography>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              icon={<IconDeviceMobile />}
              value="Mobile"
              label="Verified"
              color="green"
            />
            <StatCard
              icon={<IconClock />}
              value="Photo"
              label="Verify now"
              color="orange"
            />
            <StatCard
              icon={<IconLogout />}
              value="Government ID"
              label="Verified"
              color="cyan"
            />
            <StatCard
              icon={<IconAward />}
              value="Professional"
              label="Verify now"
              color="pink"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              variants={lift}
              initial="rest"
              whileHover="hover"
              className="relative overflow-hidden rounded-lg bg-linear-to-br p-4 border cursor-pointer group gradient-card-blue"
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 gradient-glow-blue" />
              <div className="relative flex items-center gap-4 h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-icon-blue">
                  <IconPhone />
                </div>
                <div className="flex justify-center items-center">
                  <Typography variant="small">Contact Number</Typography>
                </div>
                <Typography variant="large" className="ml-auto">
                  +91 9787570932
                </Typography>
              </div>
            </motion.div>

            <motion.div
              variants={lift}
              initial="rest"
              whileHover="hover"
              className="relative overflow-hidden rounded-lg bg-linear-to-br p-4 border cursor-pointer group gradient-card-purple"
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 gradient-glow-purple" />
              <div className="relative flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-icon-purple">
                  <IconSquareRoundedPercentage />
                </div>
                <div>
                  <Typography variant="small">Profile completion %</Typography>
                </div>
                <div className="ml-auto">
                  <CircularProgress size={70} value={80}></CircularProgress>
                </div>
              </div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ------------------------------ */
/* Stat Card                      */
/* ------------------------------ */

function StatCard({
  icon,
  value,
  label,
  color = "green",
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  color?: "green" | "orange" | "cyan" | "pink";
}) {
  return (
    <motion.div
      variants={lift}
      initial="rest"
      whileHover="hover"
      className={`relative overflow-hidden rounded-lg bg-gradient-to-br p-4 border cursor-pointer group gradient-card-${color}`}
    >
      <div
        className={`absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 gradient-glow-${color}`}
      />
      <div className="relative flex items-center gap-4">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg gradient-icon-${color}`}
        >
          {icon}
        </div>

        <div>
          <Typography variant="small" className="font-semibold mb-1">
            {value}
          </Typography>
          <Typography variant="muted" className="text-xs">
            {label}
          </Typography>
        </div>
      </div>
    </motion.div>
  );
}
