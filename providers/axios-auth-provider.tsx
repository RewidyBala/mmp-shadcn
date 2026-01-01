"use client";

import { useSession } from "next-auth/react";
import axiosInstance from "@/lib/api/axios";

export function AxiosAuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  init(session);
  return <>{children}</>;
}

const init = (session: any) => {
  axiosInstance.defaults.headers.common[
    "Auth-Token"
  ] = `${session?.accessToken}`;
};
