/* eslint-disable */
export const GET_ALL_PROJECT = (token) => {
    return {
      method: 'get',
      url: 'http://www.2fast.online:5002/api/v2/projects',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
    };
  };