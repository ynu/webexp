import process from 'node:process';
import axios from 'axios';
import proxy from './proxy.js';
import alert from './alert.js';
import overview from './overview.js';
import report from "./report.js";
import ssl from "./ssl.js";
import cache from "memory-cache";
import Debug from "debug";
const debug = Debug('webexp:debug');
const warn = Debug('webexp:warn');

export class ExpError extends Error {
  constructor (code, message) {
    super(message);
    this.code = code;
  }
}

/**
 * 获取token。
 * @param {Object} options 其他参数
 *    - username exp系统用户名
 *    - secret exp系统的secret
 * @returns 获得的Token
 */
export const login = async (options = {}) => {
  const host = options.host || process.env.WEBEXP_HOST;
  const username = options.username || process.env.WEBEXP_USERNAME;
  const secret = options.secret || process.env.WEBEXP_SECRET;
  if (!username) {
    throw new ExpError(-1, '必须的参数username或环境变量username(exp用户名)未设置.')
  }
  if (!secret) {
    throw new ExpError(-1, '必须的参数secret未传入,或未设置环境变量SECRET')
  }
  const tokenCacheKey = `exp-token::${username}::${secret}`;
  let token = cache.get(tokenCacheKey);
  if (token) {
    debug(`从cache获取token(secret:${secret})`);
    return token;
  } else {
    const res = await axios.post(`${host}/api/admin/admin-auth/login`, {
      apiMod: true,
      username,
      secret,
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    if (res.data.code === 0) {
      debug(`获取token成功::${res.data.data?.token}`);
      // 过期时间为3600s, 过期时间减去30s, 防止token失效
      cache.put(tokenCacheKey, res.data.data?.token, (res.data.data?.expireIn-30*1000));
      // console.log(cache.get(tokenCacheKey))
      return res.data.data?.token;
    }
    warn('login出错:', res);
    throw new ExpError(res.data.code, res.data.message);
  }
}

export const Proxy = proxy;
export const Alert = alert;
export const Overview = overview;
export const Report = report;
export const Ssl = ssl;
export default {
  login,
  Proxy,
  Alert,
  Overview,
  Report,
  Ssl,
};
