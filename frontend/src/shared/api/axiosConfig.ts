import axios from 'axios';
import qs from 'qs';

export const api = axios.create({
  baseURL: 'https://insightestate.pro/',
  timeout: 5000,
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
});
