import axios from "axios";

export const api = axios.create({
  baseURL: "/api/v1/users",
  headers: {
    "Content-Type": "application/json",
  },

  withCredentials: true,
});