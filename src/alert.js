import process from 'node:process';
import axios from 'axios';
import Debug from 'debug';
import {login} from "./index.js";

const debug = Debug('webexp::debug');

/**
 * 添加告警对象
 * @param {Object} params 参数对象
 *    - node
 *    - sourceType
 *    - resourceType
 *    - metricName
 *    - level
 *    - exceededTime
 *    - cooldownTime
 *    - threshold
 *    - content
 * @param {Object} options 环境选项
 * @returns
 */
export const object_add = async (params, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    const res = await axios.post(`${options.host}/api/admin/alert/add-alert-object`, {
        ...params,
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json',
        },
    })
    return res.data;
}

/**
 * 删除告警对象
 * @param {String} id
 * @param {Object} options 环境选项
 * @returns
 */
export const object_delete = async (id, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    const res = await axios.post(`${options.host}/api/admin/alert/delete-alert-object`, {
        id,
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json',
        },
    });
    return res.data;
}

/**
 * 更新告警对象
 * @param {String} id
 * @param {Object} params 其他参数
 *    - node 节点或服务
 *    - sourceType 类型，1普罗米修斯，2http
 *    - resourceType 资源类型
 *    - metricName 指标名称
 *    - level 告警级别
 *    - exceededTime 超过阈值持续时间
 *    - cooldownTime 冷却时间
 *    - config
 *    - threshold
 *    - content
 * @param {Object} options 环境选项
 * @returns
 */
export const object_update = async (id, params, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    const res = await axios.post(`${options.host}/api/admin/alert/update-alert-object`, {
        id,
        ...params,
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json',
        },
    }).catch(msg => {
        console.log(msg)
    });
    return res.data;
}

/**
 * 开关告警对象
 * @param {String} id
 * @param {boolean} enable 开关状态
 * @param {Object} options 环境选项
 * @returns
 */
export const object_switch = async (id, enable, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    const res = await axios.post(`${options.host}/api/admin/alert/switch-alert-object`, {
        id,
        enable,
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json',
        },
    });
    return res.data;
}

/**
 * 获取告警对象列表
 * @param {number} sourceType 类型，1普罗米修斯，2http
 * @param {number} limit 每页数量
 * @param {number} offset 偏移量
 * @param {Object} params 其他参数
 *    - resourceType 资源类型
 *    - enable 开关状态
 *    - level 告警级别
 * @param {Object} options 环境选项
 * @returns
 */
export const object_list = async (sourceType, limit, offset, params, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    params.resourceType = params.resourceType || "";
    params.enable = params.enable || "";
    params.level = params.level || "";
    debug(`${options.host}/api/admin/alert/list-alert-object?sourceType=${sourceType}&limit=${limit}&offset=${offset}&resourceType=${params.resourceType}&enable=${params.enable}&level=${params.level}`)
    const res = await axios.get(`${options.host}/api/admin/alert/list-alert-object?sourceType=${sourceType}&limit=${limit}&offset=${offset}&resourceType=${params.resourceType}&enable=${params.enable}&level=${params.level}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data.data;
}

/**
 * 添加告警方式
 * @param {Object} params 参数对象
 *    - name 名称
 *    - alertMethod 告警方式, 1短信，2邮件，3微信公众号模版消息
 *    - config
 * @param {Object} options 环境选项
 * @returns
 */
export const method_add = async (params, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    const res = await axios.post(`${options.host}/api/admin/alert/add-alert-method`, {
        ...params,
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json',
        },
    })
    return res.data;
}

/**
 * 删除告警方式
 * @param {String} id
 * @param {Object} options 环境选项
 * @returns
 */
export const method_delete = async (id, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    const res = await axios.post(`${options.host}/api/admin/alert/delete-alert-method`, {
        id,
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json',
        },
    })
    return res.data;
}

/**
 * 更新告警方式
 * @param {String} id
 * @param {Object} params 其他参数
 *    - name 名称
 *    - alertMethod 告警方式, 1短信，2邮件，3微信公众号模版消息
 *    - config
 * @param {Object} options 环境选项
 * @returns
 */
export const method_update = async (id, params, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    const res = await axios.post(`${options.host}/api/admin/alert/update-alert-method`, {
        id,
        ...params,
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json',
        },
    })
    return res.data;
}

/**
 * 获取告警方式列表
 * @param {number} limit 每页数量
 * @param {number} offset 偏移量
 * @param {Object} params 其他参数
 *    - name 名称
 *    - alertMethod 告警方式, 1短信，2邮件，3微信公众号模版消息
 *    - config
 * @param {Object} options 环境选项
 * @returns
 */
export const method_list = async (limit, offset, params, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    params.alertMethod = params.alertMethod || "";
    params.name = params.name || "";
    const res = await axios.get(`${options.host}/api/admin/alert/list-alert-method?name=${params.name}&alertMethod=${params.alertMethod}&limit=${limit}&offset=${offset}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data.data;
}

/**
 * 开关告警方式
 * @param {String} id
 * @param {boolean} enable 开关状态
 * @param {Object} options 环境选项
 * @returns
 */
export const method_switch = async (id, enable, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    const res = await axios.post(`${options.host}/api/admin/alert/switch-alert-method`, {
        id,
        enable,
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json',
        },
    });
    return res.data;
}

/**
 * 获取告警记录列表
 * @param {number} limit 每页数量
 * @param {number} offset 偏移量
 * @param {Object} params 其他参数
 *    - level 告警级别
 *    - resourceType 资源类型
 *    - startTime 开始时间
 *    - endTime 结束时间
 * @param {Object} options 环境选项
 * @returns
 */
export const record_list = async (limit, offset, params, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    const token = await login(options)
    params.startTime = params.startTime || "";
    params.endTime = params.endTime || "";
    params.level = params.level || "";
    params.resourceType = params.resourceType || "";
    const res = await axios.get(`${options.host}/api/admin/alert/list-alert-record?resourceType=${params.resourceType}&level=${params.level}&startTime=${params.startTime}&endTime=${params.endTime}&limit=${limit}&offset=${offset}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data.data;
}
export const Object = {
    add: object_add,
    delete: object_delete,
    update: object_update,
    list: object_list,
    switch: object_switch,
}
export const Method = {
    add: method_add,
    delete: method_delete,
    update: method_update,
    list: method_list,
    switch: method_switch,
}
export const Record = {
    list: record_list,
}
export default {
    Object,
    Method,
    Record,
};