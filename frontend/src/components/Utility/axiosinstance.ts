import LoaderContext from "@/context/AppContext";
import axios, { InternalAxiosRequestConfig } from "axios";
import { useContext } from "react";

const axiosInstance = axios.create();
const loaderCounters: InternalAxiosRequestConfig<any>[] = [];
export const WithAxios = ({ children }: any) => {
  const { setLoader, setErrors } = useContext(LoaderContext);
  axiosInstance.interceptors.request.use((request) => {
    loaderCounters.push(request);
    setLoader(true);
    return request;
  });
  axiosInstance.interceptors.response.use(
    (response) => {
      loaderCounters.pop();
      if (!loaderCounters.length) {
        setLoader(false);
      }
      return response;
    },
    (err) => {
      loaderCounters.pop();
      setErrors(err);
      if (!loaderCounters.length) {
        setLoader(true);
      }
      return Promise.reject(err);
    }
  );
  return children;
};

export default axiosInstance;
