/* eslint-disable */
/* -------------------------------------- check user -------------------------------------- */
export const GET_LIST_USER = (token) => {
    return {
      method: 'get',
      url: 'https://www.2fast.online:5000/api/v2/users',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
    };
  };

  export const CHECK_DETAIL_ADMIN = (token) => {
    return {
      method: 'get',
      url: 'https://www.2fast.online:5000/api/v2/member/admin',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
    };
  };

  export const CHECK_LIMIT_CREATE_USER = (token, id) => {
    return {
      method: 'get',
      url: `https://www.2fast.online:5000/api/v2/company/${id}` ,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
    };
  };

  export const CREATE_NEW_USER = (token, data , company_public_id) => {
    return {
      method: 'post',
      url: 'https://www.2fast.online:5000/api/v2/member/user' ,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      data : {
          user_username : data.user_username,
          user_password : data.user_password,
          company_public_id : company_public_id
      }
    };
  };

  export const CREATE_DETAIL_USER = (token, data , user_public_id) => {
    return {
      method: 'post',
      url: 'https://www.2fast.online:5000/api/v2/userdetails/'+user_public_id ,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      data : data
    };
  };

  export const EDIT_DETAIL_USER = (token, data , user_public_id) => {
    return {
      method: 'patch',
      url: 'https://www.2fast.online:5000/api/v2/userdetails/'+user_public_id ,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      data : data
    };
  };