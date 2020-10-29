/* eslint-disable */
import React from 'react';
import {useLocation} from 'react-router-dom'

const UserDetail = () => {
    const data = useLocation() 
    console.log(data.data) 
  return (
    <div>
      <p>hello</p>
    </div>
  );
};

export default UserDetail;
