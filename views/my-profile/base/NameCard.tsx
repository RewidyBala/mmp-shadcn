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
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="h-6 w-1 rounded-full bg-primary" />
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

      <CardContent className="space-y-8">
        {/* Profile */}
        <div className="flex flex-col md:flex-row items-center gap-6 rounded-2xl">
          <div className="relative w-55 h-55 md:w-32 md:h-32 lg:w-36 lg:h-36 group">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              className="rounded-md h-full"
            >
              {profileImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    alt={`Profile ${index + 1}`}
                    fill
                    className="rounded-md object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Button
              variant="default"
              size="icon"
              className="absolute bottom-1 right-1 h-8 w-8 shadow-lg z-8 transition-opacity"
            >
              <IconEdit className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 flex-1 w-full">
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
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={<IconDeviceMobile />}
            value="Mobile"
            label="Verified"
          />
          <StatCard icon={<IconClock />} value="Photo" label="Verify now" />
          <StatCard
            icon={<IconLogout />}
            value="Government ID"
            label="Verified"
          />
          <StatCard
            icon={<IconAward />}
            value="Professional"
            label="Verify now"
          />
        </div>
      </CardContent>
    </Card>
  );
}

/* ------------------------------ */
/* Stat Card                      */
/* ------------------------------ */

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <motion.div
      variants={lift}
      initial="rest"
      whileHover="hover"
      className="flex items-center gap-4 rounded-md bg-muted p-4 cursor-pointer"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
        {icon}
      </div>

      <div>
        <Typography variant="large">{value}</Typography>
        <Typography variant="muted">{label}</Typography>
      </div>
    </motion.div>
  );
}
