import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { translator } from 'utils/translatorUtils';
import { toast } from 'react-toastify';

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  //   console.info(`[request] [${JSON.stringify(config)}]`);
  return config;
};
const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  //   console.error(`[request error] [${JSON.stringify(error)}]`);
  toast.error(translator('thereSeemsToBeAProblemPleaseTryAgainInAFewMinutes'));
  return Promise.reject(error);
};
const onResponse = (response: AxiosResponse): AxiosResponse => {
  //   console.info(`[response] [${JSON.stringify(response)}]`);
  return response;
};
const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  //   console.error(`[response error] [${JSON.stringify(error)}]`);
  toast.error(translator('thereSeemsToBeAProblemPleaseTryAgainInAFewMinutes'));
  return Promise.reject(error);
};

const setupInterceptorsTo = (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};

export default setupInterceptorsTo;
