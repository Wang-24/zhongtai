import request from '@/utils/request';

export const loginReq = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) =>
  request({
    url: 'login',
    method: 'post',
    data: {
      username,
      password,
    },
  });
export const listReq = ({
  query,
  pagenum,
  pagesize,
}: {
  query: string;
  pagenum: number;
  pagesize: number;
}) =>
  request({
    url: 'users',
    data: {
      query,
      pagenum,
      pagesize,
    },
  });
export const delReq = ({ id }: { id: number }) =>
  request({
    url: `users/${id}`,
    method: 'delete',
  });
export const stateReq = ({ uId, type }: { uId: string; type: boolean }) =>
  request({
    url: `users/${uId}/state/${type}`,
    method: 'put',
  });
