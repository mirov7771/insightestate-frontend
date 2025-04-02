import axios from 'axios';
import qs from 'qs';

export const api = axios.create({
  baseURL: 'https://insightestate.pro/api/',
  timeout: 50000,
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
});
