/* eslint-disable no-undef */
import process from 'node:process';
import assert from 'assert';
import { login, Proxy } from '../src/index.js';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const { WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET } = process.env;

assert.ok(WEBEXP_HOST);
assert.ok(WEBEXP_USERNAME)
assert.ok(WEBEXP_SECRET)

// @ts-ignore
describe('应用管理proxy', function() {
  // @ts-ignore
  it('获取HTTP代理列表', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Proxy.http_route_list(1, 0, { token });
    assert.ok(res.total);
    assert.equal(res.list.length, 1);
  });
});