import axios from "axios";
import React from "react";

export default function api() {
  const api = axios.create({
    baseURL: import.meta.env.VITE_url,
  });
  return api;
}
