import axios from "axios";
import { API_PATH } from "./axios.path";

const axiosInstance = axios.create({
  baseURL: API_PATH,
  timeout: 1000,
  headers: { "X-Custom-Header": "*" },
});

export default axiosInstance;
