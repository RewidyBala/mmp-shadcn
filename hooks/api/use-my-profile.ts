import { useApi, usePut } from "@/lib/api";
import { swrKeys } from "@/lib/api/swr-keys";
import { Profile } from "@/@types/profile";

export function useMyProfile() {
  return useApi<Profile>(swrKeys.profile());
}

export function useUpdateMyProfile() {
  return usePut<Profile, Partial<Profile>>(swrKeys.profile(), {
    onSuccess: () => {
      // Optionally revalidate the profile after update
    },
  });
}
