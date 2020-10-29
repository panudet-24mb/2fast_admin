/* eslint-disable */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import * as auth from './Auth';

const Verify = (props) => {
//   console.log(auth.keyStatus());
//   console.log(props);
  const { Compenent } = props;
  if (auth.keyStatus()) {
    return (
      <Route
        {...props}
        render={(props) => {
          return <Compenent {...props} />;
        }}
      />
    );
  } 
  else {
    return <Redirect to="/" />;
  }
};

export default Verify;
