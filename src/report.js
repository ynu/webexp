import process from 'node:process';
import axios from 'axios';
import Debug from 'debug';
import {login} from "./index.js";

const debug = Debug('webexp::debug');

/**
 * bottom pv uv
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - host 主机
 * @param {Object} options 环境选项
 * @returns
 */
export const bottomPvUv = async (startTime, endTime, params, options = {}) => {
    params.host = params.host || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    debug(`${options.host}/api/admin/report/bottom-pv-uv?startTime=${startTime}&endTime=${endTime}&host=${params.host}`)
    const res = await axios.get(`${options.host}/api/admin/report/bottom-pv-uv?startTime=${startTime}&endTime=${endTime}&host=${params.host}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
}

/**
 * 状态码
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - host 主机
 * @param {Object} options 环境选项
 * @returns
 */
export const httpStatus = async (startTime, endTime, params, options = {}) => {
    params.host = params.host || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    debug(`${options.host}/api/admin/report/http-status?startTime=${startTime}&endTime=${endTime}&host=${params.host}`)
    const res = await axios.get(`${options.host}/api/admin/report/http-status?startTime=${startTime}&endTime=${endTime}&host=${params.host}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
}

/**
 * performance
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {number} limit 每页数量
 * @param {number} offset 偏移量
 * @param {Object} params 其他参数
 *    - host 主机
 * @param {Object} options 环境选项
 * @returns
 */
export const performance = async (startTime, endTime, limit, offset, params, options = {}) => {
    params.host = params.host || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    debug(`${options.host}/api/admin/report/performance?startTime=${startTime}&endTime=${endTime}&limit=${limit}&offset=${offset}&host=${params.host}`)
    const res = await axios.get(`${options.host}/api/admin/report/performance?startTime=${startTime}&endTime=${endTime}&limit=${limit}&offset=${offset}&host=${params.host}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
}

/**
 * slow url
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - host 主机
 * @param {Object} options 环境选项
 * @returns
 */
export const slowUrl = async (startTime, endTime, params, options = {}) => {
    params.host = params.host || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    debug(`${options.host}/api/admin/report/slow-url?startTime=${startTime}&endTime=${endTime}&host=${params.host}`)
    const res = await axios.get(`${options.host}/api/admin/report/slow-url?startTime=${startTime}&endTime=${endTime}&host=${params.host}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
}

/**
 * top attack ip
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - host 主机
 * @param {Object} options 环境选项
 * @returns
 */
export const top_attack_ip = async (startTime, endTime, params, options = {}) => {
    params.host = params.host || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    debug(`${options.host}/api/admin/report/top-attack-ip?startTime=${startTime}&endTime=${endTime}&host=${params.host}`)
    const res = await axios.get(`${options.host}/api/admin/report/top-attack-ip?startTime=${startTime}&endTime=${endTime}&host=${params.host}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
}

/**
 * top attack route
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - host 主机
 * @param {Object} options 环境选项
 * @returns
 */
export const top_attack_route = async (startTime, endTime, params, options = {}) => {
    params.host = params.host || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    debug(`${options.host}/api/admin/report/top-attack-route?startTime=${startTime}&endTime=${endTime}&host=${params.host}`)
    const res = await axios.get(`${options.host}/api/admin/report/top-attack-route?startTime=${startTime}&endTime=${endTime}&host=${params.host}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
}

/**
 * top attack url
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - host 主机
 * @param {Object} options 环境选项
 * @returns
 */
export const top_attack_url = async (startTime, endTime, params, options = {}) => {
    params.host = params.host || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    debug(`${options.host}/api/admin/report/top-attack-url?startTime=${startTime}&endTime=${endTime}&host=${params.host}`)
    const res = await axios.get(`${options.host}/api/admin/report/top-attack-url?startTime=${startTime}&endTime=${endTime}&host=${params.host}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
}

/**
 * top browser
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - host 主机
 * @param {Object} options 环境选项
 * @returns
 */
export const top_browser = async (startTime, endTime, params, options = {}) => {
    params.host = params.host || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    debug(`${options.host}/api/admin/report/top-browser?startTime=${startTime}&endTime=${endTime}&host=${params.host}`)
    const res = await axios.get(`${options.host}/api/admin/report/top-browser?startTime=${startTime}&endTime=${endTime}&host=${params.host}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
}

/**
 * top city
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - host 主机
 * @param {Object} options 环境选项
 * @returns
 */
export const top_city = async (startTime, endTime, params, options = {}) => {
    params.host = params.host || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    debug(`${options.host}/api/admin/report/top-city?startTime=${startTime}&endTime=${endTime}&host=${params.host}`)
    const res = await axios.get(`${options.host}/api/admin/report/top-city?startTime=${startTime}&endTime=${endTime}&host=${params.host}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
}

/**
 * top country
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - host 主机
 * @param {Object} options 环境选项
 * @returns
 */
export const top_country = async (startTime, endTime, params, options = {}) => {
    params.host = params.host || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    debug(`${options.host}/api/admin/report/top-country?startTime=${startTime}&endTime=${endTime}&host=${params.host}`)
    const res = await axios.get(`${options.host}/api/admin/report/top-country?startTime=${startTime}&endTime=${endTime}&host=${params.host}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
}

/**
 * top device
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - host 主机
 * @param {Object} options 环境选项
 * @returns
 */
export const top_device = async (startTime, endTime, params, options = {}) => {
    params.host = params.host || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    debug(`${options.host}/api/admin/report/top-device?startTime=${startTime}&endTime=${endTime}&host=${params.host}`)
    const res = await axios.get(`${options.host}/api/admin/report/top-device?startTime=${startTime}&endTime=${endTime}&host=${params.host}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
}

/**
 * top ip
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - host 主机
 * @param {Object} options 环境选项
 * @returns
 */
export const top_ip = async (startTime, endTime, params, options = {}) => {
    params.host = params.host || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    debug(`${options.host}/api/admin/report/top-ip?startTime=${startTime}&endTime=${endTime}&host=${params.host}`)
    const res = await axios.get(`${options.host}/api/admin/report/top-ip?startTime=${startTime}&endTime=${endTime}&host=${params.host}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
}

/**
 * top os
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - host 主机
 * @param {Object} options 环境选项
 * @returns
 */
export const top_os = async (startTime, endTime, params, options = {}) => {
    params.host = params.host || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    debug(`${options.host}/api/admin/report/top-os?startTime=${startTime}&endTime=${endTime}&host=${params.host}`)
    const res = await axios.get(`${options.host}/api/admin/report/top-os?startTime=${startTime}&endTime=${endTime}&host=${params.host}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
}

/**
 * top pv uv
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - host 主机
 * @param {Object} options 环境选项
 * @returns
 */
export const top_pv_uv = async (startTime, endTime, params, options = {}) => {
    params.host = params.host || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    debug(`${options.host}/api/admin/report/top-pv-uv?startTime=${startTime}&endTime=${endTime}&host=${params.host}`)
    const res = await axios.get(`${options.host}/api/admin/report/top-pv-uv?startTime=${startTime}&endTime=${endTime}&host=${params.host}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
}

/**
 * top route
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - host 主机
 * @param {Object} options 环境选项
 * @returns
 */
export const top_route = async (startTime, endTime, params, options = {}) => {
    params.host = params.host || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    debug(`${options.host}/api/admin/report/top-route?startTime=${startTime}&endTime=${endTime}&host=${params.host}`)
    const res = await axios.get(`${options.host}/api/admin/report/top-route?startTime=${startTime}&endTime=${endTime}&host=${params.host}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
}

/**
 * top uri
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - host 主机
 * @param {Object} options 环境选项
 * @returns
 */
export const top_uri = async (startTime, endTime, params, options = {}) => {
    params.host = params.host || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    debug(`${options.host}/api/admin/report/top-uri?startTime=${startTime}&endTime=${endTime}&host=${params.host}`)
    const res = await axios.get(`${options.host}/api/admin/report/top-uri?startTime=${startTime}&endTime=${endTime}&host=${params.host}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
}

/**
 * top url
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - host 主机
 * @param {Object} options 环境选项
 * @returns
 */
export const top_url = async (startTime, endTime, params, options = {}) => {
    params.host = params.host || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    debug(`${options.host}/api/admin/report/top-url?startTime=${startTime}&endTime=${endTime}&host=${params.host}`)
    const res = await axios.get(`${options.host}/api/admin/report/top-url?startTime=${startTime}&endTime=${endTime}&host=${params.host}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
}

/**
 * 获取流量报表
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {number} limit 每页数量
 * @param {number} offset 偏移量
 * @param {Object} params 其他参数
 *    - host 主机
 * @param {Object} options 环境选项
 * @returns
 */
export const traffic = async (startTime, endTime, limit, offset, params, options = {}) => {
    params.host = params.host || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    debug(`${options.host}/api/admin/report/traffic?startTime=${startTime}&endTime=${endTime}&limit=${limit}&offset=${offset}&host=${params.host}`)
    const res = await axios.get(`${options.host}/api/admin/report/traffic?startTime=${startTime}&endTime=${endTime}&limit=${limit}&offset=${offset}&host=${params.host}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
}

/**
 * zombie site
 * @param {Object} params 其他参数
 *    - startTime 开始时间
 *    - endTime 结束时间
 *    - activityThreshold 阈值
 * @param {Object} options 环境选项
 * @returns
 */
export const zombieSite = async (params, options = {}) => {
    params.activityThreshold = params.activityThreshold || ""
    params.startTime = params.startTime || ""
    params.endTime = params.endTime || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    debug(`${options.host}/api/admin/report/zombie-site?startTime=${params.startTime}&endTime=${params.endTime}&activityThreshold=${params.activityThreshold}`)
    const res = await axios.get(`${options.host}/api/admin/report/zombie-site?startTime=${params.startTime}&endTime=${params.endTime}&activityThreshold=${params.activityThreshold}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
}

/**
 * china
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - host 主机
 * @param {Object} options 环境选项
 * @returns
 */
export const zone_china = async (startTime, endTime, params, options = {}) => {
    params.host = params.host || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    debug(`${options.host}/api/admin/report/zone-china?startTime=${startTime}&endTime=${endTime}&host=${params.host}`)
    const res = await axios.get(`${options.host}/api/admin/report/zone-china?startTime=${startTime}&endTime=${endTime}&host=${params.host}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
}

/**
 * world
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - host 主机
 * @param {Object} options 环境选项
 * @returns
 */
export const zone_world = async (startTime, endTime, params, options = {}) => {
    params.host = params.host || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    debug(`${options.host}/api/admin/report/zone-world?startTime=${startTime}&endTime=${endTime}&host=${params.host}`)
    const res = await axios.get(`${options.host}/api/admin/report/zone-world?startTime=${startTime}&endTime=${endTime}&host=${params.host}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
}

export const Top = {
    attackIp: top_attack_ip,
    attackRoute: top_attack_route,
    attackUrl: top_attack_url,
    browser: top_browser,
    city: top_city,
    country: top_country,
    device: top_device,
    ip: top_ip,
    os: top_os,
    pvUv: top_pv_uv,
    route: top_route,
    uri: top_uri,
    url: top_url,
}
export const Zone = {
    china: zone_china,
    world: zone_world,

}
export default {
    bottomPvUv,
    httpStatus,
    performance,
    slowUrl,
    traffic,
    zombieSite,
    Top,
    Zone
};
