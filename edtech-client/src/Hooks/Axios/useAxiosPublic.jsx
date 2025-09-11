import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "https://edtech-react.vercel.app/api",
  // baseURL: `http://localhost:4000/api`,
  // baseURL: `${import.meta.env.VITE_url}`,
  // baseURL: import.meta.env.VITE_url,
  baseURL: import.meta.env.VITE_url_production,
});

export default function useAxiosPublic() {
  return axiosPublic;
}
