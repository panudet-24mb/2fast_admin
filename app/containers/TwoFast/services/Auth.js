/* eslint-disable */
export const keyStatus = () => {
  const key = localStorage.getItem('token');
  return key ? true : false;
};

export const createKey = (key) => {
  localStorage.setItem('token', key);
};

export const delKey = () => {
  localStorage.removeItem('token');
};
