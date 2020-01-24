import { setItem } from './../../../utils/storage';
export default function configResponseInterceptor(axios) {
  // Add a response interceptor
  axios.interceptors.response.use(function (response) {
    // Do something with response data
    // update the token into localstorage
    let token
    if (response.config.url.indexOf('/login') > -1) {
      token = response.data.data.AuthenticationResult.AccessToken;
    } else {
      token = response.headers.authorization || null;
    }
    setItem('geptoken', token);
    return response;
  }, function (error) {
    // Do something with response error
    // if (error.response.status === 401) {
    //   setItem('geptoken', null);
    //   window.location = '/auth/login';
    // }
    return Promise.reject(error);
  });
}