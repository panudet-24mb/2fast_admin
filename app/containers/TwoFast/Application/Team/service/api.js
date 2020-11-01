/* eslint-disable */
export const GET_USER_LIST = (token) => {
    return {
      method: 'get',
      url: 'http://www.2fast.online:5000/api/v2/users',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
    };
  };

  export const GET_USER_IN_TEAM_LIST = (token, teamID, teamName) => {
    return {
      method: 'get',
      url: `http://www.2fast.online:5000/api/v2/team/${teamID}/dashboard`,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      data: teamName,
    };
  };

  export const ADD_USER = (token, teamID, userID) => {
    return {
      method: 'post',
      url: "http://www.2fast.online:5000/api/v2/team/member",
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      data: {
        "team_id" : teamID,
        "user_id" : userID
      }
    };
  };

  export const REMOVE_USER = (token, teamID, userID) => {
    return {
      method: 'delete',
      url: "http://www.2fast.online:5000/api/v2/team/member",
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      data: {
        "team_id" : teamID,
        "user_id" : userID
      }
    };
  };

