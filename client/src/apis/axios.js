import axios from "axios";

export const instance = axios.create({
  baseURL: "https://www.api.ice-spot.site/",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});
