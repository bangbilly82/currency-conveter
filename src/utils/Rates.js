import Config from '../config/config';

export function getFullLabel(rates) {
  return Config.rates[rates.toUpperCase()];
}

export function convertToLocalFormat(value) {
  return value.toLocaleString();
}