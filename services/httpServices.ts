import axios from "axios";
import config from "./config";
import { getUserToken } from "./utilities";

axios.interceptors.response.use(null, (error: any) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("An error occured:", error);
  }
  return Promise.reject(error);
});

axios.interceptors.request.use((configuration: any) => {
  configuration.headers[config.apiKeyName] = config.apiKeyValue;
  configuration.headers[config.authKeyName] = getUserToken();
  configuration.baseURL = config.baseUrl;
  return configuration;
});

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
