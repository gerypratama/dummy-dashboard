import axios from "axios";
import Cookies from "js-cookie";

export const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com/",
  timeout: 3000,
});

axiosInstance.interceptors.request.use((config) => {
  if (config.url?.includes("auth/login")) return config;

  const token = Cookies.get("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
