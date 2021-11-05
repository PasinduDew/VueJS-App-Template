import axios from "axios";
import config from "../../config";

// ******************************************************************
//                           API Imports
// ******************************************************************
import exampleService from "./exampleAPI";

// ******************************************************************
//                           Axios Instance
// ******************************************************************
const axiosInstance = axios.create({
  baseURL: config.ENV === "PROD" ? config.PROD_BASE_URL : config.DEV_BASE_URL,

  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  },

  timeout: 5000,
});

// ******************************************************************
//                           Interceptors
// ******************************************************************
// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("err" + error);
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5000
    // })
    return Promise.reject(error);
  }
);

// ******************************************************************
//                           Exports
// ******************************************************************
export const exampleAPI = new exampleService(axiosInstance);
