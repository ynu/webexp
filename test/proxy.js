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
    const res = await Proxy.http_route_add("test", {"enable_websocket":false,"status":0,"methods":["GET","POST","PUT","DELETE","PATCH","HEAD","OPTIONS","CONNECT","TRACE","PURGE"],"uris":["/*"],"host":"yanghaoran.ynu.edu.cn","vars":[["server_port","in",["80"]]],"plugins":{"redirect":{"http_to_https":false}},"upstream":{"type":"roundrobin","pass_host":"pass","scheme":"http","timeout":{"connect":60,"send":60,"read":60},"keepalive_pool":{"size":320,"idle_timeout":60,"requests":1000},"nodes":{"1.1.1.1":1}}},
        {"enable_websocket":false,"status":0,"methods":["GET","POST","PUT","DELETE","PATCH","HEAD","OPTIONS","CONNECT","TRACE","PURGE"],"uris":["/*"],"host":"yanghaoran.ynu.edu.cn","vars":[["server_port","in",["80"]]],"ports":[80],"headerGroup":[{"headerKey":"","headerValue":""}],"plugins":{"proxy-rewrite":{"headers":{}},"redirect":{"http_to_https":false}},"upstream":{"type":"roundrobin","pass_host":"pass","upstream_host":"","scheme":"http","timeout":{"connect":60,"send":60,"read":60},"keepalive_pool":{"size":320,"idle_timeout":60,"requests":1000},"nodeGroup":[{"host":"1.1.1.1","weight":1}],"nodes":{"1.1.1.1":1}}},
        "", JSON.stringify([]),{ token });
    assert.equal(res.code, 0)
  });

  it('删除HTTP代理', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.http_route_delete("106012247632904193",{ token });
    assert.equal(res.code, 0)
  });

  it('批量删除HTTP代理', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.http_route_delete_batch(JSON.stringify(["106014326514515969", "106014231136043009"]),{ token });
    assert.equal(res.code, 0)
  });

  it('更新HTTP代理', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.http_route_update("106006763613978625", "test3", {"enable_websocket":false,"host":"yanghaoran.ynu.edu.cn","methods":["GET","POST","PUT","DELETE","PATCH","HEAD","OPTIONS","CONNECT","TRACE","PURGE"],"plugins":{"redirect":{"http_to_https":false}},"status":0,"uris":["/*"],"vars":[["server_port","in",["80"]]],"upstream":{"keepalive_pool":{"idle_timeout":60,"requests":1000,"size":320},"nodes":{"1.1.1.1":1},"pass_host":"pass","scheme":"http","timeout":{"connect":60,"read":60,"send":60},"type":"roundrobin"}},
        {"enable_websocket":false,"headerGroup":[{"headerKey":"","headerValue":""}],"host":"yanghaoran.ynu.edu.cn","methods":["GET","POST","PUT","DELETE","PATCH","HEAD","OPTIONS","CONNECT","TRACE","PURGE"],"plugins":{"proxy-rewrite":{"headers":{}},"redirect":{"http_to_https":false}},"ports":[80],"status":0,"uris":["/*"],"vars":[["server_port","in",["80"]]],"upstream":{"keepalive_pool":{"idle_timeout":60,"requests":1000,"size":320},"nodeGroup":[{"host":"1.1.1.1","weight":1}],"nodes":{"1.1.1.1":1},"pass_host":"pass","scheme":"http","timeout":{"connect":60,"read":60,"send":60},"type":"roundrobin","upstream_host":""}},
        "", JSON.stringify(["12"]),{ token });
    assert.equal(res.code, 0)
  });

  it('获取HTTP代理列表', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.http_route_list(1, 0, { token });
    assert.ok(res.total);
    assert.equal(res.list.length, 1);
  });

  it('获取HTTP代理数量', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.http_route_count({ token });
    assert.ok(res.count >= 0);
  });

  it('获取HTTP代理', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.http_route_detail("106012261893537793", { token });
    assert.equal(res.code, 0)
  });

  it('启用HTTP代理', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.http_route_enable(JSON.stringify(["106111114827268097"]), { token });
    assert.equal(res.code, 0)
  });

  it('停用HTTP代理', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.http_route_disable(JSON.stringify(["106111114827268097"]), { token });
    assert.equal(res.code, 0)
  });

  it('添加HTTP代理标签', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.http_route_tag_add("106111114827268097", "待删除21", { token });
    assert.equal(res.code, 0)
  });

  it('删除HTTP代理标签', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.http_route_tag_delete("106111114827268097", "待删除2", { token });
    assert.equal(res.code, 0)
  });

  it('获取HTTP代理标签列表, 用于标签下拉框', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.http_route_tag_list({ token });
    assert.equal(res.code, 0)
    assert.ok(res.data.list.length >= 0);
  });

  it('更新HTTP代理备注', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.http_route_remark_update("106111114827268097", "123", { token });
    assert.equal(res.code, 0)
  });

  it('创建HTTP代理SSL证书', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.http_route_ssl_create(JSON.stringify(["yanghaoran.ynu.edu.cn"]), { token });
    assert.equal(res.code, 0)
  });

  it('保存HTTP代理插件', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.http_route_plugins_save(JSON.stringify(["106111114827268097"]), JSON.stringify([109,96]), { token });
    assert.equal(res.code, 0)
  });

  it('获取所有HTTP代理站点列表（用于给用户组添加权限）', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.http_route_site_list({ token });
    assert.equal(res.code, 0)
    assert.ok(res.data.list.length >= 0);
  });
});