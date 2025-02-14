import axios from "axios";

export default function AxiosInstance() {
  let StudentCms = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers: {},
  });

  let OpenAi = axios.create({
    baseURL: "https://api.openai.com",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
  });

  return { StudentCms, OpenAi };
}
