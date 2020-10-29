/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import avatars from '../../../../../../api/images/avatars';

import Avatar from 'react-avatar';

const UserList = (props) => {
  const { data } = props;
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const currentLocation = location.pathname;

  const pushDataNewPage = (key) => {
    history.push({
      pathname: '/app/manage-user/' + key.user_username,
      data: key, // your data array of objects
    });
    // console.log(key);
    // console.log(currentLocation);
    // history.push(currentLocation + '/' + key.user_username);
  };
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div className={classes.div}>
      <p style={{ fontSize: '20px' }}>User Recent Create</p>
      <Grid
        container
        spacing={3}
        direction="row"
        className={classes.contentGrid}
        wrap="wrap"
        className={classes.grid}
      >
        {data.map((key, index) => (
          <Grid item md={3} key={index}>
            <Paper
              elevation={2}
              className={classes.paper}
              onClick={() => pushDataNewPage(key)}
            >
              <div className={classes.profileImageBox}>
                {/* <img src={avatars[0]} className={classes.Image} /> */}
                <Avatar name={key.user_username} size="60" round={true} />
              </div>
              <div className={classes.userDetail}>
                <p className={classes.userDetailText}>{key.user_username}</p>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles({
  div: {
    width: '96%',
  },
  contentGrid: {
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  paper: {
    display: 'flex',
    padding: '12px',
    alignItems: 'center',
    cursor: 'pointer',
  },
  profileImageBox: {
    borderRadius: '100%',
    overflow: 'hidden',
    textAlign: 'center',
    boxShadow: '0px 0px 2px black',
  },
  Image: {
    width: '58px',
  },
  userDetail: {
    display: 'grid',
    paddingLeft: '20px',
  },
  userDetailText: {
    margin: 0,
  },
});

export default UserList;
