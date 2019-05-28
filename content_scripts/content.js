import Honeybadger from 'honeybadger-js';

const HONEYBADGER_API_KEY = '===============';

Honeybadger.configure({
  apiKey: HONEYBADGER_API_KEY,
  environment: 'development',
  debug: true,
  revision: 0.1
});

console.log('Hi');