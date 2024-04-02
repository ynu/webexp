import process from 'node:process';
import axios from 'axios';
import Debug from 'debug';

const debug = Debug('webexp::debug');

/**
 * 添加告警对象
 */
export const object_add = async (node, sourceType, config, resourceType, metricName, level, threshold, exceededTime, cooldownTime, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    const res = await axios.post(`${options.host}/api/admin/alert/add-alert-object`, {
        node,
        sourceType,
        config,
        resourceType,
        metricName,
        level,
        threshold,
        exceededTime,
        cooldownTime,
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
 */
export const object_update = async (id, node, sourceType, config, resourceType, metricName, level, threshold, exceededTime, cooldownTime, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    const res = await axios.post(`${options.host}/api/admin/alert/update-alert-object`, {
        id,
        node,
        sourceType,
        config,
        resourceType,
        metricName,
        level,
        threshold,
        exceededTime,
        cooldownTime,
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
 */
export const method_add = async (name, alertMethod, config, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    const res = await axios.post(`${options.host}/api/admin/alert/add-alert-method`, {
        name,
        alertMethod,
        config,
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
 */
export const method_update = async (id, name, alertMethod, config, options = {}) => {
    options.host = options.host || process.env.WEBEXP_HOST;
    const res = await axios.post(`${options.host}/api/admin/alert/update-alert-method`, {
        id,
        name,
        alertMethod,
        config,
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

export default {
    object_add,
    object_delete,
    object_update,
    object_list,
    object_switch,
    method_add,
    method_delete,
    method_update,
    method_list,
    method_switch,
    record_list,
};