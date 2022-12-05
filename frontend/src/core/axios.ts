import axios from "axios";
import { localStorageGetItem } from "../utils/helpers";
axios.create({
  // baseURL: "http://localhost:5002/api",
});

axios.interceptors.request.use((config) => {
  if (config.headers !== undefined) {
    const { token } = localStorageGetItem("user");
    config.headers["token"] = token;
  }
  return config;
});

export { axios };
