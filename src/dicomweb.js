import { httprequest } from './webRetrieve.js';

export function readDicomWeb(url, options = {}) {
  if (url.startsWith('http')) {
    return readDicomWebHttp(url, options);
  }
  return readDicomWebFile(url, options);
}

export function readDicomWebHttp(url, options) {
  return httprequest(url, options);
}


export function readDicomWebFile(url, options) {
  throw new Error('TODO');
}