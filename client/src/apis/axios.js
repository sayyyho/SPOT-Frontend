import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.ice-spot.site/",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});
