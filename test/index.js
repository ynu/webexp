/* eslint-disable no-undef */
import process from 'node:process';
import assert from 'assert';
import { login } from '../src/index.js';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const { WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET } = process.env;

assert.ok(WEBEXP_HOST);
assert.ok(WEBEXP_USERNAME)
assert.ok(WEBEXP_SECRET)
// @ts-ignore
describe('测试通用函数', function () {
  this.timeout(30000);
  // @ts-ignore
  it('成功登录login', async () => {
    const res = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    assert.ok(res);
  });
});
