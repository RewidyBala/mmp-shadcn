import useSWR, { SWRConfiguration, SWRResponse } from "swr";
import useSWRMutation, { SWRMutationConfiguration } from "swr/mutation";
import { api } from "./axios";
import { AxiosError } from "axios";

// Default SWR configuration
export const swrConfig: SWRConfiguration = {
  revalidateOnFocus: false,
  revalidateOnReconnect: true,
  shouldRetryOnError: true,
  errorRetryCount: 3,
  dedupingInterval: 2000,
};

// Generic fetcher function
export const fetcher = <T>(url: string): Promise<T> => api.get<T>(url);

// Custom hook for GET requests with SWR
export function useApi<T>(
  url: string | null,
  config?: SWRConfiguration
): SWRResponse<T, AxiosError> {
  return useSWR<T, AxiosError>(url, fetcher, {
    ...swrConfig,
    ...config,
  });
}

// Custom hook for POST mutations
export function usePost<T, D = any>(
  url: string,
  config?: SWRMutationConfiguration<T, AxiosError, string, D>
) {
  return useSWRMutation<T, AxiosError, string, D>(
    url,
    async (key, { arg }) => api.post<T>(key, arg),
    config
  );
}

// Custom hook for PUT mutations
export function usePut<T, D = any>(
  url: string,
  config?: SWRMutationConfiguration<T, AxiosError, string, D>
) {
  return useSWRMutation<T, AxiosError, string, D>(
    url,
    async (key, { arg }) => api.put<T>(key, arg),
    config
  );
}

// Custom hook for PATCH mutations
export function usePatch<T, D = any>(
  url: string,
  config?: SWRMutationConfiguration<T, AxiosError, string, D>
) {
  return useSWRMutation<T, AxiosError, string, D>(
    url,
    async (key, { arg }) => api.patch<T>(key, arg),
    config
  );
}

// Custom hook for DELETE mutations
export function useDelete<T>(
  url: string,
  config?: SWRMutationConfiguration<T, AxiosError, string, void>
) {
  return useSWRMutation<T, AxiosError, string, void>(
    url,
    async (key) => api.delete<T>(key),
    config
  );
}

// Hook for paginated data
export function usePaginated<T>(
  baseUrl: string,
  page: number,
  limit: number = 10,
  config?: SWRConfiguration
) {
  const url = `${baseUrl}?page=${page}&limit=${limit}`;
  return useApi<T>(url, config);
}

// Hook with query parameters
export function useApiWithParams<T>(
  baseUrl: string,
  params: Record<string, any>,
  config?: SWRConfiguration
) {
  const queryString = new URLSearchParams(params).toString();
  const url = queryString ? `${baseUrl}?${queryString}` : baseUrl;
  return useApi<T>(url, config);
}
