/* eslint-disable no-undef */
import process from 'node:process';
import assert from 'assert';
import { login, Alert } from '../src/index.js';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

process.env["WEBEXP_HOST"] = 'https://api.webexp.ynu.edu.cn';
process.env["WEBEXP_USERNAME"] = 'admin@richctrl.com';
process.env["WEBEXP_SECRET"] = 'NgiUDeX9UhoJvFpfMcZEGKyLcyehCtzTNgiUDeX9UhoJvFpfMcZEGKyLcyehCtzTNgiUDeX9UhoJvFpfMcZEGKyLcyehCtzT';

const { WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET } = process.env;

assert.ok(WEBEXP_HOST);
assert.ok(WEBEXP_USERNAME)
assert.ok(WEBEXP_SECRET)

// @ts-ignore
describe('告警Alert', function() {
  it('添加告警对象', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "config": {"url":"qweqe"},
      "threshold": {"values":[201,200],"compareMethod":"not_in"},
      "content": {},
    }
    const res = await Alert.Object.add("信息技术中心-杨皓然测试", 2, "站点", "状态码", 2,2, 2, params, { token });
    assert.equal(res.code, 0)
  });

  it('删除告警对象', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Alert.Object.delete(2005, { token });
    assert.equal(res.code, 0)
  });

  it('更新告警对象', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
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
    const res = await Alert.Object.update(2019, params, { token });
    assert.equal(res.code, 0)
  });

  it('开关告警对象', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Alert.Object.switch(2017, false, { token });
    assert.equal(res.code, 0)
  });

  // @ts-ignore
  it('获取告警对象列表', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Alert.Object.list(2, 1, 0,{ token });
    assert.ok(res.total >= 0)
  });

  it('添加告警方式', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "config": {"to":13025879587}
    }
    const res = await Alert.Method.add("test2", 2, params, { token });
    assert.equal(res.code, 0)
  });

  it('删除告警方式', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Alert.Method.delete(43, { token });
    assert.equal(res.code, 0)
  });

  it('更新告警方式', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "name": "test",
      "alertMethod": 2,
      "config": {"to":13025879588}
    }
    const res = await Alert.Method.update(51, params, { token });
    assert.equal(res.code, 0)
  });

  it('开关告警方式', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const res = await Alert.Method.switch(37, false, { token });
    assert.equal(res.code, 0)
  });

  it('获取告警方式列表', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    // 查询条件：告警方式
    const alertMethod = 1;
    // 查询条件：告警方式名称
    const name = "test";
    const res = await Alert.Method.list(1, 0, { token, name, alertMethod});
    assert.ok(res.total >= 0)
  });

  it('获取告警记录列表', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    // 查询条件：告警级别: 1.提示 2.警告 3.错误 4.严重 5.紧急
    const level = 2;
    // 查询条件：开始时间: 格式yyyy-MM-dd HH:mm:ss
    const startTime = null;
    // 查询条件：结束时间: 格式yyyy-MM-dd HH:mm:ss
    const endTime = "2024-04-01 12:02:50";
    const res = await Alert.Record.list(10, 0, { token, level, startTime, endTime});
    assert.ok(res.total >= 0)
  });
});