import axios from 'axios';
// import { SESSION } from '../consts/Localstorage';

// console.log(process.env.NODE_ENV, 'api:', process.env.REACT_APP_BASE_URL);
// console.log('docker env', (window as any)._env_);

export const url = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL: `/api/v1`,
  timeout: 60000,
});

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // const session = window.localStorage.getItem(SESSION);

    // session && (config.headers[SESSION] = session);

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
