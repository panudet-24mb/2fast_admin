/* eslint-disable */
/* -------------------------------------- Login -------------------------------------- */
export const ADMIN_LOGIN = (data) => {
  return {
    method: 'post',
    url: 'http://www.2fast.online:5001/api/v2/login/admin',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };
};
/* -------------------------------------- Member Services -------------------------------------- */
export const GetUserList = (token) => {
  return {
    method: 'get',
    url: 'http://www.2fast.online:5000/api/v2/users',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    data: { team_name: 'It support' },
  };
};

export const MANAGE_TEAM_GET_TEAMLIST = (token) => {
  return {
    method: 'get',
    url: 'http://www.2fast.online:5000/api/v2/team',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    data: { team_name: 'It support' },
  };
};

export const CREATE_NEW_TEAM = (token, data) => {
  return {
    method: 'post',
    url: 'http://www.2fast.online:5000/api/v2/team',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    data: data
  };
};
