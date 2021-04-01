import { Effect, Reducer, Subscription, history } from 'umi';
import * as services from '@/services';
import * as cookie from '@/utils/cookie';
import { message } from 'antd';
const IndexModel = {
  namespace: 'login',
  state: {},
  effects: {
    *login({ payload }, { call, put }) {
      const { data, meta } = yield call(services.loginReq, payload);
      if (meta.status == 400) {
        message.error(meta.msg);
        return;
      }
      cookie.setCookie('email', data.email, 7);
      cookie.setCookie('id', data.id, 7);
      cookie.setCookie('mobile', data.mobile, 7);
      cookie.setCookie('rid', data.rid, 7);
      cookie.setCookie('token', data.token, 7);
      cookie.setCookie('username', data.username, 7);
      history.push('/');
    },
  },
  reducers: {},

  subscriptions: {
    setup() {},
  },
};

export default IndexModel;
