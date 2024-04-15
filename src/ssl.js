import process from 'node:process';
import axios from 'axios';
import Debug from 'debug';
import {login} from "./index.js";

const debug = Debug('webexp::debug');

/**
 * 获取证书列表
 * @param {number} limit 每页数量
 * @param {number} offset 偏移量
 * @param {Object} params 其他参数
 *    - hostname 域名
 * @param {Object} options 环境选项
 * @returns
 */
export const list = async (limit, offset, params, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    params.hostname = params.hostname || "";
    debug(`${options.host}/api/admin/ssl/list?limit=${limit}&offset=${offset}&name=${params.hostname}`)
    const res = await axios.get(`${options.host}/api/admin/ssl/list?limit=${limit}&offset=${offset}&name=${params.hostname}}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data.data;
}

/**
 * 获取证书详情
 * @param {Object} id 证书ID
 * @param {Object} options 环境选项
 * @returns
 */
export const detail = async (id, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    debug(`${options.host}/api/admin/ssl/detail?id=${id}`)
    const res = await axios.get(`${options.host}/api/admin/ssl/detail?id=${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data.data;
}
export default {
    list,
    detail,
};
