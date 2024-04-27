import axios, {AxiosInstance} from "axios";
const baseURL = "http://localhost:3000"

export const axiosInstance : AxiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosInstance;