/* eslint-disable */
/* -------------------------------------- Dashboard -------------------------------------- */

export const GET_DATA_DASHBOARD = (token) => {
    return {
      method: 'get',
      url: 'https://www.2fast.online:5002/api/v2/dashboard',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
    };
  };

  export const DETAIL_ADMIN = (token) => {
    return {
      method: 'get',
      url: 'https://www.2fast.online:5000/api/v2/member/admin',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
    };
  };

  export const CHECK_STORAGE = (token, company_public_id) => {
    return {
      method: 'get',
      url: 'https://www.2fast.online:5005/api/v2/storage/'+company_public_id,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
    };
  };