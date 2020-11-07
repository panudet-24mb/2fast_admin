/* eslint-disable */
/* -------------------------------------- JOB -------------------------------------- */

export const LIST_JOB_ALL = (token, project_id) => {
    return {
      method: 'get',
      url: 'https://www.2fast.online:5002/api/v2/projects/findjob/'+project_id,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
    };
  };

  export const CHECK_PRIORITY = (token) => {
    return {
      method: 'get',
      url: 'https://www.2fast.online:5002/api/v2/priority/',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
    };
  };

  export const CHECK_STATUS = (token) => {
    return {
      method: 'get',
      url: 'https://www.2fast.online:5002/api/v2/status/',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
    };
  };

  export const CHECK_JOB_TYPE = (token) => {
    return {
      method: 'get',
      url: 'https://www.2fast.online:5002/api/v2/jobs/type',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
    };
  };
/* -------------------------------------- Create new job -------------------------------------- */
  export const CREATE_NEW_JOB = (token, data, projectID) => {
    return {
      method: 'post',
      url: 'https://www.2fast.online:5002/api/v2/jobs/'+projectID,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      data : data
    };
  };
  export const INSERT_USER_IN_JOB = (token, data, jobID) => {
    return {
      method: 'post',
      url: 'https://www.2fast.online:5002/api/v2/jobs/user_has_job/'+jobID,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      data : data
    };
  };
  export const INSERT_TEAM_IN_JOB = (token, data, jobID) => {
    return {
      method: 'post',
      url: 'https://www.2fast.online:5002/api/v2/jobs/team_has_job/'+jobID,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      data : data
    };
  };
/* -------------------------------------- Create new job -------------------------------------- */

  export const CHECK_TEAM_IN_PROJECT = (token, project_id) => {
    return {
    method: 'get',
    url: `https://www.2fast.online:5002/api/v2/projects/project_has_team/${project_id}`,
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    }
  };
  };

  export const CHECK_USER_IN_PROJECT = (token, project_id) => {
    return {
    method: 'get',
    url: `https://www.2fast.online:5002/api/v2/projects/project_has_user/${project_id}`,
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    }
  };
  };