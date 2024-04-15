/* eslint-disable no-undef */
import process from 'node:process';
import assert from 'assert';
import {login, Ssl} from '../src/index.js';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const { WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET } = process.env;

assert.ok(WEBEXP_HOST);
assert.ok(WEBEXP_USERNAME)
assert.ok(WEBEXP_SECRET)

// @ts-ignore
describe('ssl证书管理', function() {

  it('获取证书列表', async () => {
    const params = {
      hostname: "sites.ynu.edu.cn",
    }
    const res = await Ssl.list(1, 0, params,{ WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.ok(res.total);
    assert.equal(res.list.length, 1);
  });

  it('获取证书详情', async () => {
    const id = "00000000000000013205"
    const res = await Ssl.detail(id,{ WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.id, id)
  });
});