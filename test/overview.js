/* eslint-disable no-undef */
import process from 'node:process';
import assert from 'assert';
import {login, Overview} from '../src/index.js';

process.env["WEBEXP_HOST"] = 'https://api.webexp.ynu.edu.cn';
process.env["WEBEXP_USERNAME"] = 'admin@richctrl.com';
process.env["WEBEXP_SECRET"] = 'NgiUDeX9UhoJvFpfMcZEGKyLcyehCtzTNgiUDeX9UhoJvFpfMcZEGKyLcyehCtzTNgiUDeX9UhoJvFpfMcZEGKyLcyehCtzT';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const { WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET } = process.env;

assert.ok(WEBEXP_HOST);
assert.ok(WEBEXP_USERNAME)
assert.ok(WEBEXP_SECRET)

// @ts-ignore
describe('应用管理proxy', function() {
  it('访问量', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "routeId": "106580746382082049"
    }
    const res = await Overview.HttpRoute.access("2024-04-07 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });

  it('攻击次数统计', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "routeId": "106580746382082049",
      "startTime": "2024-04-07 12:12:12",
      "endTime": "2024-04-07 17:12:12",
    }
    const res = await Overview.HttpRouteAttack.count(params,{ token });
    assert.equal(res.code, 0)
  });

  it('攻击列表，时间走势', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "routeId": "106580746382082049",
      "startTime": "2024-04-07 12:12:12",
      "endTime": "2024-04-07 17:12:12",
    }
    const res = await Overview.HttpRouteAttack.list(params,{ token });
    assert.equal(res.code, 0)
  });

  it('攻击列表，时间走势', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "routeId": "106580746382082049",
      "startTime": "2024-04-07 12:12:12",
      "endTime": "2024-04-07 17:12:12",
    }
    const res = await Overview.HttpRouteAttack.list(params,{ token });
    assert.equal(res.code, 0)
  });

  it('拦截次数统计', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "routeId": "106580746382082049",
      "startTime": "2024-04-07 12:12:12",
      "endTime": "2024-04-07 17:12:12",
    }
    const res = await Overview.HttpRouteBlock.count(params,{ token });
    assert.equal(res.code, 0)
  });

  it('错误统计', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "routeId": "106580746382082049",
    }
    const res = await Overview.HttpRouteError.count("2024-04-07 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });

  it('错误统计', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "routeId": "106580746382082049",
      "startTime": "2024-04-07 12:12:12",
      "endTime": "2024-04-07 17:12:12",
    }
    const res = await Overview.HttpRouteError.stat(params,{ token });
    assert.equal(res.code, 0)
  });

  it('入流量', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "routeId": "106580746382082049",
    }
    const res = await Overview.HttpRouteInOutBound.list("2024-04-07 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });

  it('在线用户统计', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "routeId": "106580746382082049",
    }
    const res = await Overview.HttpRouteOnlineUser.count(params,{ token });
    assert.equal(res.code, 0)
  });

  it('平均响应时长', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "routeId": "106580746382082049",
    }
    const res = await Overview.HttpRoute.performance("2024-04-07 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });

  it('PV UV', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "routeId": "106580746382082049",
    }
    const res = await Overview.HttpRoutePvUv.list("2024-04-07 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });

  it('请求 响应时长', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "routeId": "106580746382082049",
    }
    const res = await Overview.HttpRouteRequestResponseTime.list("2024-04-07 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });

  it('错误统计列表', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "routeId": "106580746382082049",
      "startTime": "2024-04-07 12:12:12",
      "endTime": "2024-04-07 17:12:12",
    }
    const res = await Overview.HttpRouteStatusCodeCount.list(params,{ token });
    assert.equal(res.code, 0)
  });

  it('Top 攻击IP列表', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "routeId": "106580746382082049",
      "startTime": "2024-04-07 12:12:12",
      "endTime": "2024-04-07 17:12:12",
    }
    const res = await Overview.HttpRouteTopAttackList.ip(params,{ token });
    assert.equal(res.code, 0)
  });

  it('Top 攻击规则列表', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "routeId": "106580746382082049",
      "startTime": "2024-04-07 12:12:12",
      "endTime": "2024-04-07 17:12:12",
    }
    const res = await Overview.HttpRouteTopAttackList.rule(params,{ token });
    assert.equal(res.code, 0)
  });

  it('Top IP列表', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "routeId": "106580746382082049",
      "startTime": "2024-04-07 12:12:12",
      "endTime": "2024-04-07 17:12:12",
    }
    const res = await Overview.HttpRouteTopList.ip(params,{ token });
    assert.equal(res.code, 0)
  });

  it('Top URL列表', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "routeId": "106580746382082049",
      "startTime": "2024-04-07 12:12:12",
      "endTime": "2024-04-07 17:12:12",
    }
    const res = await Overview.HttpRouteTopList.url(params,{ token });
    assert.equal(res.code, 0)
  });

  it('平均流量', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "routeId": "106580746382082049",
    }
    const res = await Overview.HttpRoute.traffic("2024-04-07 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });
});