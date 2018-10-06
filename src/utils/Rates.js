import Config from '../config/config';

export function getFullLabel(rates) {
  return Config.rates[rates.toUpperCase()];
}