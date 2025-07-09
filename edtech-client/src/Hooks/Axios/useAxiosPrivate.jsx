import axios from "axios";

const axiosPrivate = axios.create({
  baseURL: "https://68689289d5933161d70be704.mockapi.io",
});

export default function useAxiosPrivate() {
  return axiosPrivate;
}
