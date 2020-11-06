/* eslint-disable */
export const GET_ALL_PROJECT = (token) => {
    return {
      method: 'get',
      url: 'https://www.2fast.online:5002/api/v2/projects',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
    };
  };

  export const CREATE_PROJECT = (token, data) => {
    return {
      method: 'post',
      url: 'https://www.2fast.online:5002/api/v2/projects',
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
      url: 'https://www.2fast.online:5002/api/v2/projects/'+project_id,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
    };
  };

  export const EDIT_PROJECT = (token, data, project_id) => {
    return {
      method: 'patch',
      url: 'https://www.2fast.online:5002/api/v2/projects/'+project_id,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      data : data
    };
  };

  //----------- DetailProjectInCard-------------//
  //----------- AddTeamAndUserInProject-------------//
  export const FIND_USER_LIST = (token) => {
    return {
      method: 'get',
      url: 'https://www.2fast.online:5000/api/v2/users',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
    };
  };

  export const FIND_TEAM_LIST = (token) => {
    return {
    method: 'get',
    url: 'https://www.2fast.online:5000/api/v2/team',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    }
  };
  };

  export const GET_DASHBOARD_TEAM = (token, teamID) => {
    return {
    method: 'get',
    url: `https://www.2fast.online:5000/api/v2/team/${teamID}/dashboard`,
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    }
  };
  };
  
  export const CHECK_TEAM_IN_PROJECT = (token, teamID) => {
    return {
    method: 'get',
    url: `https://www.2fast.online:5002/api/v2/projects/project_has_team/${teamID}`,
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    }
  };
  };

  export const CHECK_USER_IN_PROJECT = (token, teamID) => {
    return {
    method: 'get',
    url: `https://www.2fast.online:5002/api/v2/projects/project_has_user/${teamID}`,
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    }
  };
  };

  //----------- ListTeamTable-------------//
  export const ADD_TEAM_IN_PROJECT = (token,projectID, data) => {
    return {
    method: 'post',
    url: `https://www.2fast.online:5002/api/v2/projects/project_has_team/${projectID}`,
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    data : data
  };
  };

    //----------- ListUserTable-------------//
  export const ADD_USER_IN_PROJECT = (token,projectID, data) => {
    return {
    method: 'post',
    url: `https://www.2fast.online:5002/api/v2/projects/project_has_user/${projectID}`,
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    data : data
  };
  };

  //----------- AllUserInJob-------------//
  export const DELETE_TEAM_IN_PROJECT = (token,project_has_team_id) => {
    return {
    method: 'delete',
    url: `https://www.2fast.online:5002/api/v2/projects/project_has_team/${project_has_team_id}`,
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    }
  };
  };

  export const DELETE_USER_IN_PROJECT = (token,project_has_user_id) => {
    return {
    method: 'delete',
    url: `https://www.2fast.online:5002/api/v2/projects/project_has_user/${project_has_user_id}`,
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    }
  };
  };
