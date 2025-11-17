import axios from 'axios';
import qs from 'qs';

const currency = localStorage.getItem('currency') || '฿'

export const api = axios.create({
  baseURL: 'https://lotsof.properties/api/',
  timeout: 50000,
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
  headers: {
    currency: currency === '₽' ? 'RUB' : (currency === '฿' ? 'THB' : 'USD')
  }
});
