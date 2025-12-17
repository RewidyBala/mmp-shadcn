"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarTrigger,
  useSidebar,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Separator } from "../ui/separator";

export function AppSidebar() {
  const { state, isHoverExpanded } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex items-center justify-center h-13">
        {state === "expanded" || isHoverExpanded ? (
          <div className="flex items-center justify-center w-full px-4">
            <div className="relative h-6 w-30">
              <Image
                src="/logo.svg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <SidebarTrigger className="absolute right-2"></SidebarTrigger>
          </div>
        ) : (
          <div className="relative h-6 w-30">
            <Image
              src="/globe.svg"
              alt="Globe"
              fill
              className="object-contain"
            />
          </div>
        )}
      </SidebarHeader>
      <Separator></Separator>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
