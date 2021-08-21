import Axios from 'axios';
import setupInterceptorsTo from './axiosInterceptors';
import * as dotenv from 'dotenv';

dotenv.config();

const isDevelopment = process.env.NODE_ENV === 'development';

const axios = setupInterceptorsTo(
  Axios.create({
    baseURL: isDevelopment
      ? (process.env.REACT_APP_DEVELOPMENT_URL_V1 as string)
      : (process.env.REACT_APP_PRODUCTION_URL_V1 as string),
  })
);

export const axiosFirmware = setupInterceptorsTo(
  Axios.create({
    baseURL: isDevelopment
      ? (process.env.REACT_APP_MEDIA_SERVER_DEVELOPMENT_URL as string)
      : (process.env.REACT_APP_MEDIA_SERVER_PRODUCTION_URL as string),
  })
);

export const axiosDeviceConnectionTest = setupInterceptorsTo(
  Axios.create({
    baseURL: isDevelopment
      ? (process.env.REACT_APP_DEVELOPMENT_DEVICE_CONNECTION_TEST_URL as string)
      : (process.env.REACT_APP_PRODUCTION_DEVICE_CONNECTION_TEST_URL as string),
  })
);

export const axiosConfig = (token: string) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  } else {
    axios.defaults.headers.common['Authorization'] = null;
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default axios;
