import axios from "axios";

const axiosPrivate = axios.create({
  baseURL: "http://localhost:4000/api",
});

export default function useAxiosPrivate() {
  axiosPrivate.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token-secret");

      console.log("Interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  return axiosPrivate;
}
