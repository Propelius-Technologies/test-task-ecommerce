import axios from "axios";
import {API_PATH} from "./axios.path";

const axiosInstance = axios.create({
  baseURL: API_PATH,
});

export default axiosInstance;
