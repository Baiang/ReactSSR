import chalk from 'chalk';
import moment from 'moment';

export const log = (color, level) => (message) => {
  const prefix = `${moment().format()} [${level}] `;
  if (typeof message === 'object') {
    return console[level](chalk[color]('%o'), `${prefix}${message}`);
  }
  return console[level](chalk[color](`${prefix}${message}`));
};

export const debug = log('white', 'debug');

export const info = log('white', 'info');

export const warn = log('yellow', 'warn');

export const error = log('red', 'error');
