"use client";
import { createContext, ReactNode } from "react";
import { Profile } from "@/@types/profile";
import { useMyProfile } from "@/hooks/api/use-my-profile";
import { ProductLoading } from "@/components/common/skeleton";

type _UserProfileContext = {
  userProfile: Profile;
};

type _SettingsContextProvider = {
  children: ReactNode;
};

export const UserProfileContext = createContext<
  _UserProfileContext | undefined
>(undefined);

const UserProfileProvider = ({ children }: _SettingsContextProvider) => {
  const { data: userProfile, isLoading } = useMyProfile();
  if (isLoading || !userProfile) {
    return <ProductLoading></ProductLoading>;
  }
  return (
    <UserProfileContext.Provider
      value={{
        userProfile,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};

export default UserProfileProvider;
