import axios from 'axios';
import configRequestInterceptor from './request';
import configResponseInterceptor from './response';
import constant from './../../../constant/general';

const axiosInstance = axios.create({
  baseURL: constant.apiRootUrl()
});

configRequestInterceptor(axiosInstance);
configResponseInterceptor(axiosInstance);

export default axiosInstance;
