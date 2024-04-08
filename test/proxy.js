/* eslint-disable no-undef */
import process from 'node:process';
import assert from 'assert';
import {login, Proxy} from '../src/index.js';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const { WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET } = process.env;

assert.ok(WEBEXP_HOST);
assert.ok(WEBEXP_USERNAME)
assert.ok(WEBEXP_SECRET)

// @ts-ignore
describe('应用管理proxy', function() {

  it('添加HTTP代理', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "config": {"enable_websocket":false,"status":0,"methods":["GET","POST","PUT","DELETE","PATCH","HEAD","OPTIONS","CONNECT","TRACE","PURGE"],"uris":["/*"],"host":"yanghaoran.ynu.edu.cn","vars":[["server_port","in",["80"]]],"plugins":{"redirect":{"http_to_https":false}},"upstream":{"type":"roundrobin","pass_host":"pass","scheme":"http","timeout":{"connect":60,"send":60,"read":60},"keepalive_pool":{"size":320,"idle_timeout":60,"requests":1000},"nodes":{"1.1.1.1":1}}},
      "content": {"enable_websocket":false,"status":0,"methods":["GET","POST","PUT","DELETE","PATCH","HEAD","OPTIONS","CONNECT","TRACE","PURGE"],"uris":["/*"],"host":"yanghaoran.ynu.edu.cn","vars":[["server_port","in",["80"]]],"ports":[80],"headerGroup":[{"headerKey":"","headerValue":""}],"plugins":{"proxy-rewrite":{"headers":{}},"redirect":{"http_to_https":false}},"upstream":{"type":"roundrobin","pass_host":"pass","upstream_host":"","scheme":"http","timeout":{"connect":60,"send":60,"read":60},"keepalive_pool":{"size":320,"idle_timeout":60,"requests":1000},"nodeGroup":[{"host":"1.1.1.1","weight":1}],"nodes":{"1.1.1.1":1}}},
      "remark": "",
      "pluginIds": JSON.stringify([]),
    }
    const res = await Proxy.HttpRoute.add("test3", params,{ token });
    assert.equal(res.code, 0)
  });

  it('删除HTTP代理', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.HttpRoute.delete("106012247632904193",{ token });
    assert.equal(res.code, 0)
  });

  it('批量删除HTTP代理', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.HttpRoute.delete_batch(JSON.stringify(["106014326514515969", "106014231136043009"]),{ token });
    assert.equal(res.code, 0)
  });

  it('更新HTTP代理', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "name": "test8",
      "config": {"enable_websocket":false,"status":0,"methods":["GET","POST","PUT","DELETE","PATCH","HEAD","OPTIONS","CONNECT","TRACE","PURGE"],"uris":["/*"],"host":"yanghaoran.ynu.edu.cn","vars":[["server_port","in",["80"]]],"plugins":{"redirect":{"http_to_https":false}},"upstream":{"type":"roundrobin","pass_host":"pass","scheme":"http","timeout":{"connect":60,"send":60,"read":60},"keepalive_pool":{"size":320,"idle_timeout":60,"requests":1000},"nodes":{"1.1.1.1":1}}},
      "content": {"enable_websocket":false,"status":0,"methods":["GET","POST","PUT","DELETE","PATCH","HEAD","OPTIONS","CONNECT","TRACE","PURGE"],"uris":["/*"],"host":"yanghaoran.ynu.edu.cn","vars":[["server_port","in",["80"]]],"ports":[80],"headerGroup":[{"headerKey":"","headerValue":""}],"plugins":{"proxy-rewrite":{"headers":{}},"redirect":{"http_to_https":false}},"upstream":{"type":"roundrobin","pass_host":"pass","upstream_host":"","scheme":"http","timeout":{"connect":60,"send":60,"read":60},"keepalive_pool":{"size":320,"idle_timeout":60,"requests":1000},"nodeGroup":[{"host":"1.1.1.1","weight":1}],"nodes":{"1.1.1.1":1}}},
      "remark": "",
      "pluginIds": JSON.stringify([]),
    }
    const res = await Proxy.HttpRoute.update("106835529529556993", params,{ token });
    assert.equal(res.code, 0)
  });

  it('获取HTTP代理列表', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      name: "中心",
      uri: "/*",
      host: "ynu",
      tags: JSON.stringify(["一卡通", "ITC"]),
      withUpstreamStatus: true,
    }
    const res = await Proxy.HttpRoute.list(1, 0, params,{ token });
    assert.ok(res.total);
    assert.equal(res.list.length, 1);
  });

  it('获取HTTP代理数量', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.HttpRoute.count({ token });
    assert.ok(res.count >= 0);
  });

  it('获取HTTP代理', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.HttpRoute.detail("106012261893537793", { token });
    assert.equal(res.code, 0)
  });

  it('启用HTTP代理', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.HttpRoute.enable(JSON.stringify(["106111114827268097"]), { token });
    assert.equal(res.code, 0)
  });

  it('停用HTTP代理', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.HttpRoute.disable(JSON.stringify(["106111114827268097"]), { token });
    assert.equal(res.code, 0)
  });

  it('添加HTTP代理标签', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.HttpRouteTag.add("106111114827268097", "待删除21", { token });
    assert.equal(res.code, 0)
  });

  it('删除HTTP代理标签', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.HttpRouteTag.delete("106111114827268097", "待删除2", { token });
    assert.equal(res.code, 0)
  });

  it('获取HTTP代理标签列表, 用于标签下拉框', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.HttpRouteTag.list({ token });
    assert.equal(res.code, 0)
    assert.ok(res.data.list.length >= 0);
  });

  it('更新HTTP代理备注', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.HttpRouteRemark.update("106111114827268097", "123", { token });
    assert.equal(res.code, 0)
  });

  it('创建HTTP代理SSL证书', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.HttpRouteSSL.create(JSON.stringify(["yanghaoran.ynu.edu.cn"]), { token });
    assert.equal(res.code, 0)
  });

  it('保存HTTP代理插件', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.HttpRoutePlugins.save(JSON.stringify(["106111114827268097"]), JSON.stringify([109,96]), { token });
    assert.equal(res.code, 0)
  });

  it('获取所有HTTP代理站点列表（用于给用户组添加权限）', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.HttpRouteSite.list({ token });
    assert.equal(res.code, 0)
    assert.ok(res.data.list.length >= 0);
  });
});