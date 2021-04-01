import { Effect, ImmerReducer, Reducer } from 'umi';
import * as services from '@/services';
import { message } from 'antd';
export interface listType {
  readonly id: number;
  username: string;
  mobile: string;
  type: number;
  email: string;
  create_time: string;
  mg_state: boolean;
  role_name: string;
}
export interface useModelType {
  namespace: 'use';
  state: {
    list: listType[];
    total: number;
  };
  effects: {
    getList: Effect;
    del: Effect;
    modifyState: Effect;
  };
  reducers: {
    GET_LIST: ImmerReducer;
    DEL: ImmerReducer;
    MODIFY_STSTE: ImmerReducer;
  };
}
const useModel: useModelType = {
  namespace: 'use',
  state: {
    list: [],
    total: 1,
  },
  effects: {
    *getList({ payload }, { call, put }) {
      const { data, meta } = yield call(services.listReq, payload);

      yield put({
        type: 'GET_LIST',
        payload: {
          users: data.users,
          total: data.total,
        },
      });
    },
    *del({ payload }, { call, put }) {
      const { data, meta } = yield call(services.delReq, payload);
      if (meta.status == 400) {
        message.error(meta.msg);
        return;
      }
      message.info(meta.msg);
    },
    *modifyState({ payload }, { call, put }) {
      const { data, meta } = yield call(services.stateReq, payload);
      yield put({
        type: 'MODIFY_STSTE',
        payload,
      });
    },
  },
  reducers: {
    GET_LIST(state, action) {
      state.list = action.payload.users;
      state.total = action.payload.total;
    },
    DEL(state, action) {},
    MODIFY_STSTE(state, action) {
      state.list.forEach((item: any) => {
        if (item.id == action.payload.uId) {
          item.mg_state = action.payload.type;
        }
      });
    },
  },
};

export default useModel;
