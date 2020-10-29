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

  export const CREATE_PROJECT = (token, data) => {
    return {
      method: 'post',
      url: 'http://www.2fast.online:5002/api/v2/projects',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      data : data
    };
  };

  export const DELETE_PROJECT = (token, project_id) => {
    return {
      method: 'delete',
      url: 'http://www.2fast.online:5002/api/v2/projects/'+project_id,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
    };
  };

  export const EDIT_PROJECT = (token, data, project_id) => {
    return {
      method: 'patch',
      url: 'http://www.2fast.online:5002/api/v2/projects/'+project_id,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      data : data
    };
  };
