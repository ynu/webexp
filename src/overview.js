import process from 'node:process';
import axios from 'axios';
import Debug from 'debug';

const debug = Debug('webexp::debug');

/**
 * 访问量
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - routeId 路由ID
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_access = async (startTime, endTime, params, options = {}) => {
    params.routeId = params.routeId || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    debug(`${options.host}/api/admin/http-route-overview/access?startTime=${startTime}&endTime=${endTime}&routeId=${params.routeId}`)
    const res = await axios.get(`${options.host}/api/admin/http-route-overview/access?startTime=${startTime}&endTime=${endTime}&routeId=${params.routeId}`, {
        headers: {
            Authorization: `Bearer ${options.token}`,
        },
    });
    return res.data;
}

/**
 * 攻击次数统计
 * @param {Object} params 其他参数
 *    - startTime 开始时间
 *    - endTime 结束时间
 *    - routeId 路由ID
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_attack_count = async (params, options = {}) => {
    params.routeId = params.routeId || ""
    params.startTime = params.startTime || ""
    params.endTime = params.endTime || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    debug(`${options.host}/api/admin/http-route-overview/attack-count?startTime=${params.startTime}&endTime=${params.endTime}&routeId=${params.routeId}`)
    const res = await axios.get(`${options.host}/api/admin/http-route-overview/attack-count?startTime=${params.startTime}&endTime=${params.endTime}&routeId=${params.routeId}`, {
        headers: {
            Authorization: `Bearer ${options.token}`,
        },
    });
    return res.data;
}

/**
 * 攻击列表，时间走势
 * @param {Object} params 其他参数
 *    - startTime 开始时间
 *    - endTime 结束时间
 *    - routeId 路由ID
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_attack_list = async (params, options = {}) => {
    params.routeId = params.routeId || ""
    params.startTime = params.startTime || ""
    params.endTime = params.endTime || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    debug(`${options.host}/api/admin/http-route-overview/attack-list?startTime=${params.startTime}&endTime=${params.endTime}&routeId=${params.routeId}`)
    const res = await axios.get(`${options.host}/api/admin/http-route-overview/attack-list?startTime=${params.startTime}&endTime=${params.endTime}&routeId=${params.routeId}`, {
        headers: {
            Authorization: `Bearer ${options.token}`,
        },
    });
    return res.data;
}

/**
 * 拦截次数统计
 * @param {Object} params 其他参数
 *    - startTime 开始时间
 *    - endTime 结束时间
 *    - routeId 路由ID
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_block_count = async (params, options = {}) => {
    params.routeId = params.routeId || ""
    params.startTime = params.startTime || ""
    params.endTime = params.endTime || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    debug(`${options.host}/api/admin/http-route-overview/block-count?startTime=${params.startTime}&endTime=${params.endTime}&routeId=${params.routeId}`)
    const res = await axios.get(`${options.host}/api/admin/http-route-overview/block-count?startTime=${params.startTime}&endTime=${params.endTime}&routeId=${params.routeId}`, {
        headers: {
            Authorization: `Bearer ${options.token}`,
        },
    });
    return res.data;
}

/**
 * 错误统计
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - routeId 路由ID
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_error_count = async (startTime, endTime, params, options = {}) => {
    params.routeId = params.routeId || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    debug(`${options.host}/api/admin/http-route-overview/error-count?startTime=${startTime}&endTime=${endTime}&routeId=${params.routeId}`)
    const res = await axios.get(`${options.host}/api/admin/http-route-overview/error-count?startTime=${startTime}&endTime=${endTime}&routeId=${params.routeId}`, {
        headers: {
            Authorization: `Bearer ${options.token}`,
        },
    });
    return res.data;
}

/**
 * 错误统计,分状态统计
 * @param {Object} params 其他参数
 *    - startTime 开始时间
 *    - endTime 结束时间
 *    - routeId 路由ID
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_error_stat = async (params, options = {}) => {
    params.routeId = params.routeId || ""
    params.startTime = params.startTime || ""
    params.endTime = params.endTime || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    debug(`${options.host}/api/admin/http-route-overview/error-stat?startTime=${params.startTime}&endTime=${params.endTime}&routeId=${params.routeId}`)
    const res = await axios.get(`${options.host}/api/admin/http-route-overview/error-stat?startTime=${params.startTime}&endTime=${params.endTime}&routeId=${params.routeId}`, {
        headers: {
            Authorization: `Bearer ${options.token}`,
        },
    });
    return res.data;
}

/**
 * 入流量
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - routeId 路由ID
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_in_out_bound_list = async (startTime, endTime, params, options = {}) => {
    params.routeId = params.routeId || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    debug(`${options.host}/api/admin/http-route-overview/in-out-bound-list?startTime=${startTime}&endTime=${endTime}&routeId=${params.routeId}`)
    const res = await axios.get(`${options.host}/api/admin/http-route-overview/in-out-bound-list?startTime=${startTime}&endTime=${endTime}&routeId=${params.routeId}`, {
        headers: {
            Authorization: `Bearer ${options.token}`,
        },
    });
    return res.data;
}

/**
 * 在线用户统计
 * @param {Object} params 其他参数
 *    - routeId 路由ID
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_online_user_count = async (params, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    params.routeId = params.routeId || ""
    debug(`${options.host}/api/admin/http-route-overview/online-user-count?routeId=${params.routeId}`)
    const res = await axios.get(`${options.host}/api/admin/http-route-overview/online-user-count?routeId=${params.routeId}`, {
        headers: {
            Authorization: `Bearer ${options.token}`,
        },
    });
    return res.data;
}

/**
 * 平均响应时长
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - routeId 路由ID
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_performance = async (startTime, endTime, params, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    params.routeId = params.routeId || ""
    debug(`${options.host}/api/admin/http-route-overview/performance?startTime=${startTime}&endTime=${endTime}&routeId=${params.routeId}`)
    const res = await axios.get(`${options.host}/api/admin/http-route-overview/performance?startTime=${startTime}&endTime=${endTime}&routeId=${params.routeId}`, {
        headers: {
            Authorization: `Bearer ${options.token}`,
        },
    });
    return res.data;
}

/**
 * PV UV
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - routeId 路由ID
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_pvuv_list = async (startTime, endTime, params, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    params.routeId = params.routeId || ""
    debug(`${options.host}/api/admin/http-route-overview/pvuv-list?startTime=${startTime}&endTime=${endTime}&routeId=${params.routeId}`)
    const res = await axios.get(`${options.host}/api/admin/http-route-overview/pvuv-list?startTime=${startTime}&endTime=${endTime}&routeId=${params.routeId}`, {
        headers: {
            Authorization: `Bearer ${options.token}`,
        },
    });
    return res.data;
}

/**
 * 请求 响应时长
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - routeId 路由ID
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_request_response_time_list = async (startTime, endTime, params, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    params.routeId = params.routeId || ""
    debug(`${options.host}/api/admin/http-route-overview/request-response-time-list?startTime=${startTime}&endTime=${endTime}&routeId=${params.routeId}`)
    const res = await axios.get(`${options.host}/api/admin/http-route-overview/request-response-time-list?startTime=${startTime}&endTime=${endTime}&routeId=${params.routeId}`, {
        headers: {
            Authorization: `Bearer ${options.token}`,
        },
    });
    return res.data;
}

/**
 * 错误统计列表
 * @param {Object} params 其他参数
 *    - startTime 开始时间
 *    - endTime 结束时间
 *    - routeId 路由ID
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_status_code_count_list = async (params, options = {}) => {
    params.routeId = params.routeId || ""
    params.startTime = params.startTime || ""
    params.endTime = params.endTime || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    debug(`${options.host}/api/admin/http-route-overview/status-code-count-list?startTime=${params.startTime}&endTime=${params.endTime}&routeId=${params.routeId}`)
    const res = await axios.get(`${options.host}/api/admin/http-route-overview/status-code-count-list?startTime=${params.startTime}&endTime=${params.endTime}&routeId=${params.routeId}`, {
        headers: {
            Authorization: `Bearer ${options.token}`,
        },
    });
    return res.data;
}

/**
 * Top 攻击IP列表
 * @param {Object} params 其他参数
 *    - startTime 开始时间
 *    - endTime 结束时间
 *    - routeId 路由ID
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_top_attack_ip_list = async (params, options = {}) => {
    params.routeId = params.routeId || ""
    params.startTime = params.startTime || ""
    params.endTime = params.endTime || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    debug(`${options.host}/api/admin/http-route-overview/top-attack-ip-list?startTime=${params.startTime}&endTime=${params.endTime}&routeId=${params.routeId}`)
    const res = await axios.get(`${options.host}/api/admin/http-route-overview/top-attack-ip-list?startTime=${params.startTime}&endTime=${params.endTime}&routeId=${params.routeId}`, {
        headers: {
            Authorization: `Bearer ${options.token}`,
        },
    });
    return res.data;
}

/**
 * Top 攻击规则列表
 * @param {Object} params 其他参数
 *    - startTime 开始时间
 *    - endTime 结束时间
 *    - routeId 路由ID
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_top_attack_rule_list = async (params, options = {}) => {
    params.routeId = params.routeId || ""
    params.startTime = params.startTime || ""
    params.endTime = params.endTime || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    debug(`${options.host}/api/admin/http-route-overview/top-attack-rule-list?startTime=${params.startTime}&endTime=${params.endTime}&routeId=${params.routeId}`)
    const res = await axios.get(`${options.host}/api/admin/http-route-overview/top-attack-rule-list?startTime=${params.startTime}&endTime=${params.endTime}&routeId=${params.routeId}`, {
        headers: {
            Authorization: `Bearer ${options.token}`,
        },
    });
    return res.data;
}

/**
 * Top IP列表
 * @param {Object} params 其他参数
 *    - startTime 开始时间
 *    - endTime 结束时间
 *    - routeId 路由ID
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_top_ip_list = async (params, options = {}) => {
    params.routeId = params.routeId || ""
    params.startTime = params.startTime || ""
    params.endTime = params.endTime || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    debug(`${options.host}/api/admin/http-route-overview/top-ip-list?startTime=${params.startTime}&endTime=${params.endTime}&routeId=${params.routeId}`)
    const res = await axios.get(`${options.host}/api/admin/http-route-overview/top-ip-list?startTime=${params.startTime}&endTime=${params.endTime}&routeId=${params.routeId}`, {
        headers: {
            Authorization: `Bearer ${options.token}`,
        },
    });
    return res.data;
}

/**
 * Top IP列表
 * @param {Object} params 其他参数
 *    - startTime 开始时间
 *    - endTime 结束时间
 *    - routeId 路由ID
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_top_url_list = async (params, options = {}) => {
    params.routeId = params.routeId || ""
    params.startTime = params.startTime || ""
    params.endTime = params.endTime || ""
    options.host = options.host || process.env.WEBEXP_HOST;
    debug(`${options.host}/api/admin/http-route-overview/top-url-list?startTime=${params.startTime}&endTime=${params.endTime}&routeId=${params.routeId}`)
    const res = await axios.get(`${options.host}/api/admin/http-route-overview/top-url-list?startTime=${params.startTime}&endTime=${params.endTime}&routeId=${params.routeId}`, {
        headers: {
            Authorization: `Bearer ${options.token}`,
        },
    });
    return res.data;
}

/**
 * 平均流量
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {Object} params 其他参数
 *    - routeId 路由ID
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_traffic = async (startTime, endTime, params, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    params.routeId = params.routeId || ""
    debug(`${options.host}/api/admin/http-route-overview/traffic?startTime=${startTime}&endTime=${endTime}&routeId=${params.routeId}`)
    const res = await axios.get(`${options.host}/api/admin/http-route-overview/traffic?startTime=${startTime}&endTime=${endTime}&routeId=${params.routeId}`, {
        headers: {
            Authorization: `Bearer ${options.token}`,
        },
    });
    return res.data;
}

export const HttpRoute = {
    access: http_route_access,
    performance: http_route_performance,
    traffic: http_route_traffic,
}
export const HttpRouteAttack = {
    count: http_route_attack_count,
    list: http_route_attack_list,
}
export const HttpRouteBlock = {
    count: http_route_block_count,
}
export const HttpRouteError = {
    count: http_route_error_count,
    stat: http_route_error_stat,
}
export const HttpRouteInOutBound = {
    list: http_route_in_out_bound_list,
}
export const HttpRouteOnlineUser = {
    count: http_route_online_user_count,
}
export const HttpRoutePvUv = {
    list: http_route_pvuv_list,
}
export const HttpRouteRequestResponseTime = {
    list: http_route_request_response_time_list,
}
export const HttpRouteStatusCodeCount = {
    list: http_route_status_code_count_list,
}
export const HttpRouteTopAttackList = {
    ip: http_route_top_attack_ip_list,
    rule: http_route_top_attack_ip_list,
}
export const HttpRouteTopList = {
    ip: http_route_top_ip_list,
    url: http_route_top_url_list,
}

export default {
    HttpRoute,
    HttpRouteAttack,
    HttpRouteBlock,
    HttpRouteError,
    HttpRouteInOutBound,
    HttpRouteOnlineUser,
    HttpRoutePvUv,
    HttpRouteRequestResponseTime,
    HttpRouteStatusCodeCount,
    HttpRouteTopAttackList,
    HttpRouteTopList,
};
