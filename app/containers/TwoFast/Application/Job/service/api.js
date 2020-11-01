/* eslint-disable */
/* -------------------------------------- JOB -------------------------------------- */

export const LIST_JOB_ALL = (token) => {
    return {
      method: 'get',
      url: 'http://www.2fast.online:5002/api/v2/jobs/',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
    };
  };

  export const CHECK_PRIORITY = (token) => {
    return {
      method: 'get',
      url: 'http://www.2fast.online:5002/api/v2/priority/',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
    };
  };

  export const CHECK_STATUS = (token) => {
    return {
      method: 'get',
      url: 'http://www.2fast.online:5002/api/v2/status/',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
    };
  };

  export const CREATE_NEW_JOB = (token, data, projectID) => {
    return {
      method: 'post',
      url: 'http://www.2fast.online:5002/api/v2/jobs/'+projectID,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      data : data
    };
  };

  