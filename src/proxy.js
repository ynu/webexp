import process from 'node:process';
import axios from 'axios';
import Debug from 'debug';

const debug = Debug('webexp::debug');

export const http_route_list = async (limit, offset, options = {}) => {
  options.host = options.host || process.env.WEBEXP_HOST;
  debug(`${options.host}/api/admin/proxy-http-route/list?limit=${limit}&offset=${offset}`)
  const res = await axios.get(`${options.host}/api/admin/proxy-http-route/list?limit=${limit}&offset=${offset}`, {
    headers: {
      Authorization: `Bearer ${options.token}`,
    },
  });
  return res.data.data;
}

export default {
  http_route_list,
};
