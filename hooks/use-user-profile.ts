import { useContext } from "react";
import { UserProfileContext } from "@/providers/user-profile-provider";

export const useUserProfile = () => {
  const context = useContext(UserProfileContext);

  if (!context) {
    throw new Error(
      "UserProfileProvider must be used within a UserProfileProvider"
    );
  }

  return context;
};
