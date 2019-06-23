import { Context } from 'egg';

export default {
  getEnv(this: Context) {
    return this.app.config.env;
  },
};
