import axios from "axios";

export const api = axios.create({
  baseURL: "https://booking.openintech.app/api",
  headers: {
    "Shop-Id": "072f100a-9009-4e5c-98a2-007f2f24cf11",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
     config.headers.Authorization = `Bearer ${token}`
  }
  return config;
});