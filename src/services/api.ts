import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});