import axios from 'axios';
import qs from 'qs';
import {getCurrency} from "@/shared/utils";

export const api = axios.create({
  baseURL: 'https://lotsof.properties/api/',
  timeout: 50000,
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
  headers: {
    currency: getCurrency()
  }
});
