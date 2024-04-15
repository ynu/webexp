/* eslint-disable no-undef */
import process from 'node:process';
import assert from 'assert';
import {login, Overview} from '../src/index.js';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const { WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET } = process.env;

assert.ok(WEBEXP_HOST);
assert.ok(WEBEXP_USERNAME)
assert.ok(WEBEXP_SECRET)

// @ts-ignore
describe('应用管理proxy', function() {
  it('访问量', async () => {
    const params = {
      "routeId": "106580746382082049"
    }
    const res = await Overview.HttpRoute.access("2024-04-07 12:12:12", "2024-04-07 17:12:12", params,{ WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('攻击次数统计', async () => {
    const params = {
      "routeId": "106580746382082049",
      "startTime": "2024-04-07 12:12:12",
      "endTime": "2024-04-07 17:12:12",
    }
    const res = await Overview.HttpRouteAttack.count(params,{ WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('攻击列表，时间走势', async () => {
    const params = {
      "routeId": "106580746382082049",
      "startTime": "2024-04-07 12:12:12",
      "endTime": "2024-04-07 17:12:12",
    }
    const res = await Overview.HttpRouteAttack.list(params,{ WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('攻击列表，时间走势', async () => {
    const params = {
      "routeId": "106580746382082049",
      "startTime": "2024-04-07 12:12:12",
      "endTime": "2024-04-07 17:12:12",
    }
    const res = await Overview.HttpRouteAttack.list(params,{ WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('拦截次数统计', async () => {
    const params = {
      "routeId": "106580746382082049",
      "startTime": "2024-04-07 12:12:12",
      "endTime": "2024-04-07 17:12:12",
    }
    const res = await Overview.HttpRouteBlock.count(params,{ WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('错误统计', async () => {
    const params = {
      "routeId": "106580746382082049",
    }
    const res = await Overview.HttpRouteError.count("2024-04-07 12:12:12", "2024-04-07 17:12:12", params,{ WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('错误统计', async () => {
    const params = {
      "routeId": "106580746382082049",
      "startTime": "2024-04-07 12:12:12",
      "endTime": "2024-04-07 17:12:12",
    }
    const res = await Overview.HttpRouteError.stat(params,{ WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('入流量', async () => {
    const params = {
      "routeId": "106580746382082049",
    }
    const res = await Overview.HttpRouteInOutBound.list("2024-04-07 12:12:12", "2024-04-07 17:12:12", params,{ WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('在线用户统计', async () => {
    const params = {
      "routeId": "106580746382082049",
    }
    const res = await Overview.HttpRouteOnlineUser.count(params,{ WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('平均响应时长', async () => {
    const params = {
      "routeId": "106580746382082049",
    }
    const res = await Overview.HttpRoute.performance("2024-04-07 12:12:12", "2024-04-07 17:12:12", params,{ WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('PV UV', async () => {
    const params = {
      "routeId": "106580746382082049",
    }
    const res = await Overview.HttpRoutePvUv.list("2024-04-07 12:12:12", "2024-04-07 17:12:12", params,{ WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('请求 响应时长', async () => {
    const params = {
      "routeId": "106580746382082049",
    }
    const res = await Overview.HttpRouteRequestResponseTime.list("2024-04-07 12:12:12", "2024-04-07 17:12:12", params,{ WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('错误统计列表', async () => {
    const params = {
      "routeId": "106580746382082049",
      "startTime": "2024-04-07 12:12:12",
      "endTime": "2024-04-07 17:12:12",
    }
    const res = await Overview.HttpRouteStatusCodeCount.list(params,{ WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('Top 攻击IP列表', async () => {
    const params = {
      "routeId": "106580746382082049",
      "startTime": "2024-04-07 12:12:12",
      "endTime": "2024-04-07 17:12:12",
    }
    const res = await Overview.HttpRouteTopAttackList.ip(params,{ WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('Top 攻击规则列表', async () => {
    const params = {
      "routeId": "106580746382082049",
      "startTime": "2024-04-07 12:12:12",
      "endTime": "2024-04-07 17:12:12",
    }
    const res = await Overview.HttpRouteTopAttackList.rule(params,{ WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('Top IP列表', async () => {
    const params = {
      "routeId": "106580746382082049",
      "startTime": "2024-04-07 12:12:12",
      "endTime": "2024-04-07 17:12:12",
    }
    const res = await Overview.HttpRouteTopList.ip(params,{ WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('Top URL列表', async () => {
    const params = {
      "routeId": "106580746382082049",
      "startTime": "2024-04-07 12:12:12",
      "endTime": "2024-04-07 17:12:12",
    }
    const res = await Overview.HttpRouteTopList.url(params,{ WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });

  it('平均流量', async () => {
    const params = {
      "routeId": "106580746382082049",
    }
    const res = await Overview.HttpRoute.traffic("2024-04-07 12:12:12", "2024-04-07 17:12:12", params,{ WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET });
    assert.equal(res.code, 0)
  });
});