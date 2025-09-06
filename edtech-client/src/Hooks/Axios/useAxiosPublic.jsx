import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "https://edtech-react.vercel.app/api",
  baseURL: "http://localhost:4000/api",
});

export default function useAxiosPublic() {
  return axiosPublic;
}
