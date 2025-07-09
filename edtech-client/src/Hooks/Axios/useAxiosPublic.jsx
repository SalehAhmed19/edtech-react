import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://68689289d5933161d70be704.mockapi.io",
});

export default function useAxiosPublic() {
  return axiosPublic;
}
