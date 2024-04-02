import process from 'node:process';
import axios from 'axios';
import Debug from 'debug';

const debug = Debug('webexp::debug');

/**
 * 添加HTTP代理
 */
export const http_route_add = async (name, config, content, remark, pluginIds, options = {}) => {
  options.host = options.host || process.env.WEBEXP_HOST;
  const res = await axios.post(`${options.host}/api/admin/proxy-http-route/add`, {
    name,
    config,
    content,
    remark,
    pluginIds,
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
 */
export const http_route_update = async (serialNo, name, config, content, remark, pluginIds, options = {}) => {
  options.host = options.host || process.env.WEBEXP_HOST;
  const res = await axios.post(`${options.host}/api/admin/proxy-http-route/update`, {
    serialNo,
    name,
    config,
    content,
    remark,
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
 * 启用HTTP代理
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
 */
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

/**
 * 获取HTTP代理数量
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

export default {
  http_route_add,
  http_route_delete,
  http_route_delete_batch,
  http_route_update,
  http_route_list,
  http_route_count,
  http_route_detail,
  http_route_enable,
  http_route_disable,
  http_route_tag_add,
  http_route_tag_delete,
  http_route_tag_list,
  http_route_remark_update,
  http_route_ssl_create,
  http_route_plugins_save,
  http_route_site_list,
};
