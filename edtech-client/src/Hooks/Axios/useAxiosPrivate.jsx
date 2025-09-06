import axios from "axios";
import { useSignOut } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";

const axiosPrivate = axios.create({
  // baseURL: "https://edtech-react.vercel.app/api",
  baseURL: "http://localhost:4000/api",
});

export default function useAxiosPrivate() {
  const navigate = useNavigate();
  const [signOut] = useSignOut(auth);
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

  axiosPrivate.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      console.log({ error: error.response.status });
      const status = error.response?.status;
      if (status === 401 || status === 403) {
        await signOut();
        navigate("/authentication/login");
        console.warn(
          "Unauthorized or Forbidden detected, but redirection is disabled for debugging."
        );
      }
      return Promise.reject(error);
    }
  );
  return axiosPrivate;
}
