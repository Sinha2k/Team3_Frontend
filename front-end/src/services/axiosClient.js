import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import { path } from "../routes/path";
import LocalStorageService from "../services/local-storage/";

const baseConfig = (baseURL, contentType = "application/json") => {
  return {
    baseURL,
    headers: {
      "Accept-Language": "en-US",
      "Content-Type": contentType,
      "access-control-allow-origin": "*",
    },
  };
};

export const createService = (baseURL, contentType = "application/json") => {
  return interceptAuth(baseConfig(baseURL, contentType));
};

export const downloadFileService = (
  baseURL,
  contentType = "application/json"
) => {
  const config = baseConfig(baseURL, contentType);
  config.responseType = "blob";
  return interceptAuth(config);
};

const interceptAuth = (config) => {
  const instance = axios.create(config);

  instance.interceptors.request.use((cf) => {
    const token =
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoYXJpdGgiLCJpYXQiOjE2Njc4MTM2MzAsImV4cCI6MjY2ODQxODQzMH0.LSK9Z3xiExfc_h7dE8moH3xNAIoGtUaz0EraqZFL3eEVIt8O_3ev1z1_qeiv81eQR5JqtH7z54u1NjaTM6OCLA";
    if (token && cf?.headers) {
      cf.headers["Authorization"] = "Bearer " + token;
    }
    return cf;
  });
  instance.interceptors.response.use(
    (response) => {
      // Do something with response data
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        LocalStorageService.removeAllItem();
        window.location.href = `${path.login}`;
      }
      // Do something with response error
      return Promise.reject(error);
    }
  );
  return instance;
};

export const createServiceNoToken = (baseURL) => {
  const instance = axios.create({
    baseURL,
    headers: {
      "Accept-Language": "en-US",
      "Content-Type": "application/json",
    },
  });
  instance.interceptors.request.use((config) => {
    return config;
  });
  return instance;
};
