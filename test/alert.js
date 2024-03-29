/* eslint-disable no-undef */
import process from 'node:process';
import assert from 'assert';
import { login, Alert } from '../src/index.js';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const { WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET } = process.env;

assert.ok(WEBEXP_HOST);
assert.ok(WEBEXP_USERNAME)
assert.ok(WEBEXP_SECRET)

// @ts-ignore
describe('告警Alert', function() {
  // @ts-ignore
  it('获取告警对象列表', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Alert.object_list(2, 1, 0,{ token });
    assert.ok(res);
  });
});