import { useApi } from "@/lib/api";
import { swrKeys } from "@/lib/api/swr-keys";
import { Profile } from "@/model/profile";

export function useMyProfile() {
  return useApi<Profile>(swrKeys.profile());
}
