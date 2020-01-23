import { getItem } from './../../../utils/storage';
export default function configRequestInterceptor(axios) {
  axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers = { ...config.headers, authorization: getItem('geptoken') }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
}