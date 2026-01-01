import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

// Create axios instance with default config
export const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Handle common errors
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Unauthorized - clear token and redirect to login
          if (typeof window !== "undefined") {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }
          break;
        case 403:
          console.error("Forbidden access");
          break;
        case 404:
          console.error("Resource not found");
          break;
        case 500:
          console.error("Server error");
          break;
        default:
          console.error("An error occurred:", error.message);
      }
    } else if (error.request) {
      console.error("Network error - no response received");
    } else {
      console.error("Error setting up request:", error.message);
    }
    return Promise.reject(error);
  }
);

// Generic request wrapper
export async function apiRequest<T>(config: AxiosRequestConfig): Promise<T> {
  const response: AxiosResponse<T> = await axiosInstance(config);
  return response.data;
}

// HTTP Methods
export const api = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    apiRequest<T>({ method: "GET", url, ...config }),

  post: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    apiRequest<T>({ method: "POST", url, data, ...config }),

  put: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    apiRequest<T>({ method: "PUT", url, data, ...config }),

  patch: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    apiRequest<T>({ method: "PATCH", url, data, ...config }),

  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    apiRequest<T>({ method: "DELETE", url, ...config }),
};

export default axiosInstance;
