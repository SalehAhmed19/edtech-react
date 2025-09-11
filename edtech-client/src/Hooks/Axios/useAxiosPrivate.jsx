import axios from "axios";
import { useSignOut } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";

const axiosPublic = axios.create({
  baseURL: "http://localhost:4000/api",
  // baseURL: import.meta.env.VITE_url_production,
});

export default function useAxiosPublic() {
  const navigate = useNavigate();
  const [signOut] = useSignOut(auth);
  axiosPublic.interceptors.request.use(
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

  axiosPublic.interceptors.response.use(
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
  return axiosPublic;
}
