import axios from 'axios';
import qs from 'qs';

export const api = axios.create({
  baseURL: 'http://77.238.232.18:8080/',
  timeout: 5000,
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
});
