import axios from "axios";
import API_URL from "../constant/urls";

const Api = axios.create({
  baseURL: API_URL.API_BASEURL
})

Api.interceptors.request.use((request) => {
  request.headers["Authtoken"] = `Bearer 3HCG7f8Qv49E1kfDDXxzLntiWI3LM642` 
  return request
},(error) => {
  return Promise.reject(error);
})

Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {

    /* if (error?.response?.status === 401) {
    } else if (error?.response?.status === 403) {
      toast.error("Access Forbidden !");
    } else if (error?.response?.status === 500) {
      toast.error("Internal Server Error !");
    } */
    return Promise.reject(error);
  }
);
export default Api;