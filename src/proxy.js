import process from 'node:process';
import axios from 'axios';
import Debug from 'debug';

const debug = Debug('webexp::debug');

/**
 * 添加HTTP代理
 * @param {String} name 代理名称
 * @param {Object} params 其他参数
 *    - config
 *    - content
 *    - remark
 *    - pluginIds
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_add = async (name, params, options = {}) => {
  options.host = options.host || process.env.WEBEXP_HOST;
  const res = await axios.post(`${options.host}/api/admin/proxy-http-route/add`, {
    name,
    ...params,
  }, {
    headers: {
      Authorization: `Bearer ${options.token}`,
      "Content-Type": 'application/json',
    },
  }).catch(msg => {
    console.log(msg)
  })
  return res.data;
}

/**
 * 删除HTTP代理
 * @param {String} serialNo 代理序列号
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_delete = async (serialNo, options = {}) => {
  options.host = options.host || process.env.WEBEXP_HOST;
  const res = await axios.post(`${options.host}/api/admin/proxy-http-route/delete`, {
    serialNo,
  }, {
    headers: {
      Authorization: `Bearer ${options.token}`,
      "Content-Type": 'application/json',
    },
  });
  return res.data;
}

/**
 * 批量删除HTTP代理
 * @param serialNos {Array} 代理序列号
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_delete_batch = async (serialNos, options = {}) => {
  options.host = options.host || process.env.WEBEXP_HOST;
  const res = await axios.post(`${options.host}/api/admin/proxy-http-route/batch-delete`, {
    serialNos,
  }, {
    headers: {
      Authorization: `Bearer ${options.token}`,
      "Content-Type": 'application/json',
    },
  });
  return res.data;
}

/**
 * 更新HTTP代理
 * @param {String} serialNo 代理序列号
 * @param {Object} params 其他参数
 *    - name
 *    - config
 *    - content
 *    - remark
 *    - pluginIds
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_update = async (serialNo, params, options = {}) => {
  options.host = options.host || process.env.WEBEXP_HOST;
  const res = await axios.post(`${options.host}/api/admin/proxy-http-route/update`, {
    serialNo,
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
 * 启用HTTP代理
 * @param {Array} serialNos 代理序列号
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_enable = async (serialNos, options = {}) => {
  options.host = options.host || process.env.WEBEXP_HOST;
  const res = await axios.post(`${options.host}/api/admin/proxy-http-route/enable`, {
    serialNos,
  }, {
    headers: {
      Authorization: `Bearer ${options.token}`,
      "Content-Type": 'application/json',
    },
  })
  return res.data;
}

/**
 * 停用HTTP代理
 * @param {Array} serialNos 代理序列号
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_disable = async (serialNos, options = {}) => {
  options.host = options.host || process.env.WEBEXP_HOST;
  const res = await axios.post(`${options.host}/api/admin/proxy-http-route/disable`, {
    serialNos,
  }, {
    headers: {
      Authorization: `Bearer ${options.token}`,
      "Content-Type": 'application/json',
    },
  })
  return res.data;
}

/**
 * 获取HTTP代理列表
 * @param {number} limit 每页数量
 * @param {number} offset 偏移量
 * @param {Object} params 其他参数
 *    - name 名称
 *    - uri 路径
 *    - host 域名
 *    - tags 标签
 *    - withUpstreamStatus 是否获取上游状态
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_list = async (limit, offset, params, options = {}) => {
  options.host = options.host || process.env.WEBEXP_HOST;
  params.name = params.name || "";
  params.uri = params.uri || "";
  params.host = params.host || "";
  params.tags = params.tags || "";
  params.withUpstreamStatus = params.withUpstreamStatus || "";
  debug(`${options.host}/api/admin/proxy-http-route/list?limit=${limit}&offset=${offset}&name=${params.name}&uri=${params.uri}&host=${params.host}&tags=${params.tags}&withUpstreamStatus=${params.withUpstreamStatus}`)
  const res = await axios.get(`${options.host}/api/admin/proxy-http-route/list?limit=${limit}&offset=${offset}&name=${params.name}&uri=${params.uri}&host=${params.host}&tags=${params.tags}&withUpstreamStatus=${params.withUpstreamStatus}`, {
    headers: {
      Authorization: `Bearer ${options.token}`,
    },
  });
  return res.data.data;
}

/**
 * 获取HTTP代理数量
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_count = async (options = {}) => {
  options.host = options.host || process.env.WEBEXP_HOST;
  const res = await axios.get(`${options.host}/api/admin/proxy-http-route/count`, {
    headers: {
      Authorization: `Bearer ${options.token}`,
    },
  });
  return res.data.data;
}

/**
 * 获取HTTP代理数量
 * @param {String} serialNo 代理序列号
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_detail = async (serialNo, options = {}) => {
  options.host = options.host || process.env.WEBEXP_HOST;
  const res = await axios.get(`${options.host}/api/admin/proxy-http-route/detail?serialNo=${serialNo}`, {
    headers: {
      Authorization: `Bearer ${options.token}`,
    },
  })
  return res.data;
}

/**
 * 添加HTTP代理标签
 * @param {String} serialNo 代理序列号
 * @param {String} tag 标签
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_tag_add = async (serialNo, tag, options = {}) => {
  options.host = options.host || process.env.WEBEXP_HOST;
  const res = await axios.post(`${options.host}/api/admin/proxy-http-route/add-tag`, {
    serialNo,
    tag,
  }, {
    headers: {
      Authorization: `Bearer ${options.token}`,
      "Content-Type": 'application/json',
    },
  })
  return res.data;
}

/**
 * 删除HTTP代理标签
 * @param {String} serialNo 代理序列号
 * @param {String} tag 标签
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_tag_delete = async (serialNo, tag, options = {}) => {
  options.host = options.host || process.env.WEBEXP_HOST;
  const res = await axios.post(`${options.host}/api/admin/proxy-http-route/delete-tag`, {
    serialNo,
    tag,
  }, {
    headers: {
      Authorization: `Bearer ${options.token}`,
      "Content-Type": 'application/json',
    },
  })
  return res.data;
}

/**
 * 获取HTTP代理标签列表, 用于标签下拉框
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_tag_list = async (options = {}) => {
  options.host = options.host || process.env.WEBEXP_HOST;
  const res = await axios.get(`${options.host}/api/admin/proxy-http-route/tag-list`, {
    headers: {
      Authorization: `Bearer ${options.token}`,
    },
  })
  return res.data;
}

/**
 * 更新HTTP代理备注
 * @param {String} serialNo 代理序列号
 * @param {String} remark 备注
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_remark_update = async (serialNo, remark, options = {}) => {
  options.host = options.host || process.env.WEBEXP_HOST;
  const res = await axios.post(`${options.host}/api/admin/proxy-http-route/remark-update`, {
    serialNo,
    remark,
  }, {
    headers: {
      Authorization: `Bearer ${options.token}`,
      "Content-Type": 'application/json',
    },
  })
  return res.data;
}

/**
 * 创建HTTP代理SSL证书
 * @param {Array} hosts 域名列表
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_ssl_create = async (hosts, options = {}) => {
  options.host = options.host || process.env.WEBEXP_HOST;
  const res = await axios.post(`${options.host}/api/admin/proxy-http-route/create-ssl`, {
    hosts,
  }, {
    headers: {
      Authorization: `Bearer ${options.token}`,
      "Content-Type": 'application/json',
    },
  })
  return res.data;
}

/**
 * 保存HTTP代理插件
 * @param {Array} serialNos 代理序列号
 * @param {Array} pluginIds 插件ids
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_plugins_save = async (serialNos, pluginIds, options = {}) => {
  options.host = options.host || process.env.WEBEXP_HOST;
  const res = await axios.post(`${options.host}/api/admin/proxy-http-route/save-plugins`, {
    serialNos,
    pluginIds,
  }, {
    headers: {
      Authorization: `Bearer ${options.token}`,
      "Content-Type": 'application/json',
    },
  })
  return res.data;
}

/**
 * 获取所有HTTP代理站点列表（用于给用户组添加权限）
 * @param {Object} options 环境选项
 * @returns
 */
export const http_route_site_list = async (options = {}) => {
  options.host = options.host || process.env.WEBEXP_HOST;
  const res = await axios.get(`${options.host}/api/admin/proxy-http-route/site-list`, {
    headers: {
      Authorization: `Bearer ${options.token}`,
    },
  })
  return res.data;
}

export const HttpRoute = {
  add: http_route_add,
  delete: http_route_delete,
  delete_batch: http_route_delete_batch,
  update: http_route_update,
  list: http_route_list,
  count: http_route_count,
  detail: http_route_detail,
  enable: http_route_enable,
  disable: http_route_disable,
}
export const HttpRouteTag = {
  add: http_route_tag_add,
  delete: http_route_tag_delete,
  list: http_route_tag_list,
}
export const HttpRouteRemark = {
  update: http_route_remark_update,
}
export const HttpRouteSSL = {
  create: http_route_ssl_create,
}
export const HttpRoutePlugins = {
  save: http_route_plugins_save,
}
export const HttpRouteSite = {
  list: http_route_site_list,
}

export default {
  HttpRoute,
  HttpRouteTag,
  HttpRouteRemark,
  HttpRoutePlugins,
  HttpRouteSite,
  HttpRouteSSL
};
