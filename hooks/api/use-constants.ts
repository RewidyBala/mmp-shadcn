import { SelectOption } from "@/@types/common";
import { useApi } from "@/lib/api";
import { swrKeys } from "@/lib/api/swr-keys";

export function useCountries() {
  return useApi<SelectOption>(swrKeys.countries());
}

export function useReligions() {
  return useApi<SelectOption>(swrKeys.religions());
}
