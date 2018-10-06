import Axios from 'axios';
import Config from '../config/config';

function __handleApiSuccess(res, resolve) {
  resolve(res.data);
}

function __handleApiError(err, reject) {
  reject(err);
}

function __callApi(url, method = 'GET') {
  const response = new Promise((resolve, reject) => {
    Axios[method.toLowerCase()](url)
    .then(res => {
      __handleApiSuccess(res, resolve);
    })
    .catch(err => {
      __handleApiError(err, reject);
    })
  })
  return response;
}

export function fetchLatestRates(query = '') {
  const host = Config.api.host;
  const base = query;
  const url = query.length ? `${host}?base=${base}` : host;
  return __callApi(url, 'GET');
}