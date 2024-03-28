import process from 'node:process';
import axios from 'axios';
import proxy from './proxy.js';

export const login = async (username, secret, options = { }) => {
  options.host = options.host || process.env.WEBEXP_HOST;
  const res = await axios.post(`${options.host}/api/admin/admin-auth/login`, {
      apiMod: true,
      username,
      secret,
    }, {
      headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  return res.data.data?.token;
}

export const Proxy = proxy;

export default {
  login,
  Proxy,
};
