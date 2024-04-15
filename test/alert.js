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
  it('添加告警对象', async () => {
    const params = {
      "node": "信息技术中心-杨皓然测试",
      "sourceType": 2,
      "resourceType": "站点",
      "metricName": "状态码",
      "level": 2,
      "exceededTime": 2,
      "cooldownTime": 2,
      "config": {"url":"qweqe"},
      "threshold": {"values":[201,200],"compareMethod":"not_in"},
      "content": {},
    }
    const res = await Alert.Object.add(params, { WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('删除告警对象', async () => {
    const res = await Alert.Object.delete(2005, { WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('更新告警对象', async () => {
    const params = {
      "node": "信息技术中心-杨皓然测试",
      "sourceType": 2,
      "resourceType": "站点",
      "metricName": "状态码",
      "level": 4,
      "exceededTime": 2,
      "cooldownTime": 2,
      "config": {"url":"qweqe44"},
      "threshold": {"values":[201,200],"compareMethod":"not_in"},
      "content": {},
    }
    const res = await Alert.Object.update(2019, params, { WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('开关告警对象', async () => {
    const res = await Alert.Object.switch(2017, false, { WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  // @ts-ignore
  it('获取告警对象列表', async () => {
    const params = {
      "resourceType": "站点",
      "enable": false,
      "level": 4,
    }
    const res = await Alert.Object.list(2, 1, 0, params, { WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.ok(res.total >= 0)
  });

  it('添加告警方式', async () => {
    const params = {
      "name": "test",
      "alertMethod": 2,
      "config": {"to":13025879587}
    }
    const res = await Alert.Method.add(params, { WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('删除告警方式', async () => {
    const res = await Alert.Method.delete(43, { WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('更新告警方式', async () => {
    const params = {
      "name": "test",
      "alertMethod": 2,
      "config": {"to":13025879588}
    }
    const res = await Alert.Method.update(51, params, { WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('开关告警方式', async () => {
    const res = await Alert.Method.switch(37, false, { WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('获取告警方式列表', async () => {
    const params = {
      "alertMethod": 0,
      "name": "test"
    }
    const res = await Alert.Method.list(1, 0, params, { WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.ok(res.total >= 0)
  });

  it('获取告警记录列表', async () => {
    const params = {
      // 查询条件：告警级别: 1.提示 2.警告 3.错误 4.严重 5.紧急
      level: 2,
      // 查询条件：开始时间: 格式yyyy-MM-dd HH:mm:ss
      startTime: null,
      // 查询条件：结束时间: 格式yyyy-MM-dd HH:mm:ss
      endTime: "2024-04-01 12:02:50",
      resourceType: "站点",
    }
    const res = await Alert.Record.list(10, 0, params,{ WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.ok(res.total >= 0)
  });
});