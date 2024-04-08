import process from 'node:process';
import axios from 'axios';
import proxy from './proxy.js';
import alert from './alert.js';
import overview from './overview.js';

/**
 * 登录系统，获取Token
 * @param {String} username 用户名
 * @param {String} secret Secret
 * @param {Object} options 其他参数
 *    - host 系统host，形如`https://example.com`，默认由环境变量`WEBEXP_HOST`获取；
 * @returns 获得的Token
 */
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
export const Alert = alert;
export const Overview = overview;
export default {
  login,
  Proxy,
  Alert,
  Overview,
};
