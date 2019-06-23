import mm from 'egg-mock';
import assert = require('assert');

describe('index', async () => {
  afterEach(mm.restore);

  it('should work', async () => {
    const app = mm.app({ baseDir: 'app' });
    await app.ready();
    const ctx = app.mockContext();
    assert(app.spec.specFn());
    assert(app.config.tsPluginDemo.testWord);
    assert(ctx.getEnv() === 'unittest');
  });
});
