"use client";
import { Button } from "@/components/ui/button";
import { IconUser } from "@tabler/icons-react";
import { signOut } from "next-auth/react";

export function UserAvatar() {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleSignOut}
      className="rounded-sm"
    >
      <IconUser className="h-5 w-5" />
      <span className="sr-only">Sign out</span>
    </Button>
  );
}
