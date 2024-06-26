import axios from "axios";
import { IUserAuth } from "../../types";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
});

AxiosInstance.interceptors.request.use(function (config) {
  const auth: IUserAuth = JSON.parse(
    window.localStorage.getItem(import.meta.env.VITE_AUTH_KEY) as string
  );
  if (auth && auth.accesToken) {
    config.headers["Authorization"] = "Bearer " + auth?.accesToken;
  }
  return config;
});

export default AxiosInstance;

AxiosInstance.interceptors.response.use(
  response => response,
  error => {
    
  const {status} = error.response;
  if(status === 401){
    window.localStorage.removeItem(import.meta.env.VITE_AUTH_KEY);
    // window.location.reload();
  }
   return Promise.reject(error);
 }
);
