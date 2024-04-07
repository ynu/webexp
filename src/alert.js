import process from 'node:process';
import axios from 'axios';
import Debug from 'debug';

const debug = Debug('webexp::debug');

/**
 * 添加告警对象
 * @param {String} node 节点或服务
 * @param {String} sourceType 类型，1普罗米修斯，2http
 * @param {String} resourceType 资源类型
 * @param {String} metricName 指标名称
 * @param {String} level 告警级别
 * @param {String} exceededTime 超过阈值持续时间
 * @param {String} cooldownTime 冷却时间
 * @param {Object} params 其他参数
 *    - config
 *    - threshold
 *    - content
 * @param {Object} options 环境选项
 * @returns
 */
export const object_add = async (node, sourceType, resourceType, metricName, level, exceededTime, cooldownTime, params, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    const res = await axios.post(`${options.host}/api/admin/alert/add-alert-object`, {
        node,
        sourceType,
        resourceType,
        metricName,
        level,
        exceededTime,
        cooldownTime,
        ...params,
    }, {
        headers: {
            Authorization: `Bearer ${options.token}`,
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
    const res = await axios.post(`${options.host}/api/admin/alert/delete-alert-object`, {
        id,
    }, {
        headers: {
            Authorization: `Bearer ${options.token}`,
            "Content-Type": 'application/json',
        },
    });
    return res.data;
}

/**
 * 更新告警对象
 * @param {String} id
 * @param {String} node 节点或服务
 * @param {String} sourceType 类型，1普罗米修斯，2http
 * @param {String} resourceType 资源类型
 * @param {String} metricName 指标名称
 * @param {String} level 告警级别
 * @param {String} exceededTime 超过阈值持续时间
 * @param {String} cooldownTime 冷却时间
 * @param {Object} params 其他参数
 *    - config
 *    - threshold
 *    - content
 * @param {Object} options 环境选项
 * @returns
 */
export const object_update = async (id, node, sourceType, resourceType, metricName, level, exceededTime, cooldownTime, params, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    const res = await axios.post(`${options.host}/api/admin/alert/update-alert-object`, {
        id,
        node,
        sourceType,
        resourceType,
        metricName,
        level,
        exceededTime,
        cooldownTime,
        ...params,
    }, {
        headers: {
            Authorization: `Bearer ${options.token}`,
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
    const res = await axios.post(`${options.host}/api/admin/alert/switch-alert-object`, {
        id,
        enable,
    }, {
        headers: {
            Authorization: `Bearer ${options.token}`,
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
 * @param {Object} options 环境选项
 * @returns
 */
export const object_list = async (sourceType, limit, offset, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    debug(`${options.host}/api/admin/alert/list-alert-object?sourceType=${sourceType}&limit=${limit}&offset=${offset}`)
    const res = await axios.get(`${options.host}/api/admin/alert/list-alert-object?sourceType=${sourceType}&limit=${limit}&offset=${offset}`, {
        headers: {
            Authorization: `Bearer ${options.token}`,
        },
    });
    return res.data.data;
}

/**
 * 添加告警方式
 * @param {String} name 名称
 * @param {number} alertMethod 告警方式, 1短信，2邮件，3微信公众号模版消息
 * @param {Object} params 其他参数
 *    - config
 * @param {Object} options 环境选项
 * @returns
 */
export const method_add = async (name, alertMethod, params, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    const res = await axios.post(`${options.host}/api/admin/alert/add-alert-method`, {
        name,
        alertMethod,
        ...params,
    }, {
        headers: {
            Authorization: `Bearer ${options.token}`,
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
    const res = await axios.post(`${options.host}/api/admin/alert/delete-alert-method`, {
        id,
    }, {
        headers: {
            Authorization: `Bearer ${options.token}`,
            "Content-Type": 'application/json',
        },
    })
    return res.data;
}

/**
 * 更新告警方式
 * @param {String} id
 * @param {String} name 名称
 * @param {number} alertMethod 告警方式, 1短信，2邮件，3微信公众号模版消息
 * @param {Object} params 其他参数
 *    - config
 * @param {Object} options 环境选项
 * @returns
 */
export const method_update = async (id, name, alertMethod, params, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    const res = await axios.post(`${options.host}/api/admin/alert/update-alert-method`, {
        id,
        name,
        alertMethod,
        ...params,
    }, {
        headers: {
            Authorization: `Bearer ${options.token}`,
            "Content-Type": 'application/json',
        },
    })
    return res.data;
}

/**
 * 获取告警方式列表
 * @param {number} limit 每页数量
 * @param {number} offset 偏移量
 * @param {Object} options 环境选项
 * @returns
 */
export const method_list = async (limit, offset, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    options.alertMethod = options.alertMethod || "";
    options.name = options.name || "";
    const res = await axios.get(`${options.host}/api/admin/alert/list-alert-method?name=${options.name}&alertMethod=${options.alertMethod}&limit=${limit}&offset=${offset}`, {
        headers: {
            Authorization: `Bearer ${options.token}`,
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
    const res = await axios.post(`${options.host}/api/admin/alert/switch-alert-method`, {
        id,
        enable,
    }, {
        headers: {
            Authorization: `Bearer ${options.token}`,
            "Content-Type": 'application/json',
        },
    });
    return res.data;
}

/**
 * 获取告警记录列表
 * @param {number} limit 每页数量
 * @param {number} offset 偏移量
 * @param {Object} options 环境选项
 * @returns
 */
export const record_list = async (limit, offset, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    options.startTime = options.startTime || "";
    options.endTime = options.endTime || "";
    options.level = options.level || "";
    const res = await axios.get(`${options.host}/api/admin/alert/list-alert-record?level=${options.level}&startTime=${options.startTime}&endTime=${options.endTime}&limit=${limit}&offset=${offset}`, {
        headers: {
            Authorization: `Bearer ${options.token}`,
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