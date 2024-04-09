/* eslint-disable no-undef */
import process from 'node:process';
import assert from 'assert';
import {login, Report} from '../src/index.js';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const { WEBEXP_HOST, WEBEXP_USERNAME, WEBEXP_SECRET } = process.env;

assert.ok(WEBEXP_HOST);
assert.ok(WEBEXP_USERNAME)
assert.ok(WEBEXP_SECRET)

// @ts-ignore
describe('bottom pv uv', function() {
  it('bottom pv uv', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "host": "sites.ynu.edu.cn"
    }
    const res = await Report.bottomPvUv("2024-04-01 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });

  it('状态码', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "host": "sites.ynu.edu.cn"
    }
    const res = await Report.httpStatus("2024-04-06 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });

  it('performance', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "host": "sites.ynu.edu.cn"
    }
    const res = await Report.performance("2024-04-06 12:12:12", "2024-04-07 17:12:12", 1, 0, params,{ token });
    assert.equal(res.code, 0)
  });

  it('slow url', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "host": "sites.ynu.edu.cn"
    }
    const res = await Report.slowUrl("2024-04-06 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });

  it('top attack ip', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      // "host": "sites.ynu.edu.cn"
    }
    const res = await Report.Top.attackIp("2023-04-01 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });

  it('top attack route', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "host": "sites.ynu.edu.cn"
    }
    const res = await Report.Top.attackRoute("2023-04-01 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });

  it('top attack url', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "host": "sites.ynu.edu.cn"
    }
    const res = await Report.Top.attackUrl("2023-04-01 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });

  it('top browser', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "host": "sites.ynu.edu.cn"
    }
    const res = await Report.Top.browser("2023-04-01 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });

  it('top city', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "host": "sites.ynu.edu.cn"
    }
    const res = await Report.Top.city("2023-04-01 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });

  it('top country', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "host": "sites.ynu.edu.cn"
    }
    const res = await Report.Top.country("2023-04-01 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });

  it('top device', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "host": "sites.ynu.edu.cn"
    }
    const res = await Report.Top.device("2023-04-01 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });

  it('top ip', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "host": "sites.ynu.edu.cn"
    }
    const res = await Report.Top.ip("2023-04-01 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });

  it('top os', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "host": "sites.ynu.edu.cn"
    }
    const res = await Report.Top.os("2023-04-01 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });

  it('top pv uv', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "host": "sites.ynu.edu.cn"
    }
    const res = await Report.Top.pvUv("2024-04-01 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });

  it('top route', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "host": "sites.ynu.edu.cn"
    }
    const res = await Report.Top.route("2024-04-01 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });

  it('top uri', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "host": "sites.ynu.edu.cn"
    }
    const res = await Report.Top.uri("2024-04-01 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });

  it('top url', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "host": "sites.ynu.edu.cn"
    }
    const res = await Report.Top.url("2024-04-01 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });

  it('traffic', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "host": "sites.ynu.edu.cn"
    }
    const res = await Report.traffic("2024-04-06 12:12:12", "2024-04-07 17:12:12", 1, 0, params,{ token });
    assert.equal(res.code, 0)
  });

  it('zombie site', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "activityThreshold": "10",
      "startTime": "2024-04-07 12:12:12",
      "endTime": "2024-04-07 17:12:12",
    }
    const res = await Report.zombieSite(params,{ token });
    assert.equal(res.code, 0)
  });

  it('china', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "host": "sites.ynu.edu.cn"
    }
    const res = await Report.Zone.china("2024-04-01 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });

  it('world', async () => {
    const token = await login(WEBEXP_USERNAME, WEBEXP_SECRET);
    const params = {
      "host": "sites.ynu.edu.cn"
    }
    const res = await Report.Zone.world("2024-04-01 12:12:12", "2024-04-07 17:12:12", params,{ token });
    assert.equal(res.code, 0)
  });
});