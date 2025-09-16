import axios from "axios";

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_url,
  // baseURL: import.meta.env.VITE_url_production,
});

export default function useAxiosPublic() {
  return axiosPublic;
}
