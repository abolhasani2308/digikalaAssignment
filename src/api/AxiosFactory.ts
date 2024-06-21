import axios from 'axios';
import {errorLogger, requestLogger, responseLogger} from 'axios-logger';

export const createAxios = () => {
  const instance = axios.create({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const {request, response} = instance.interceptors;
  if (__DEV__) {
    request.use(requestLogger, errorLogger);
    response.use(responseLogger, errorLogger);
  }
  return instance;
};
