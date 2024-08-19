import axios from "axios";

export default function AxiosInstance() {
  let StudentCms = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers: {},
  });

  return { StudentCms };
}
