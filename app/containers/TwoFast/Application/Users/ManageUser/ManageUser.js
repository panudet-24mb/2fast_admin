/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PersonAdd from '@material-ui/icons/PersonAdd';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import UserList from './Userlist/UserList';
import UserDataTable from './UserDataTable';
import CreateUser from './CreateUser/CreateUser';

import Slide from '@material-ui/core/Slide';
import CreateDone from './CreateUser/CreateDone';

import * as api from '../../../services/api';
import UserDetail from './UserDetail/UserDetail';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ManageUser = (props) => {
  const classes = useStyles();

  const [userData, setUserData] = useState([]);
  const [currentUsers, setCurrentUsers] = useState(0);
  const usersCount = {
    MAX_USERS: 100,
    currentUsers: currentUsers,
  };

  const [newUserData, setNewUserData] = useState({
    username: '',
    password: '',
  });
  const [newUserModal, setNewUserModal] = useState(false);
  const [nextStepStatus, setnextStepStatus] = useState(false);
  const [completeAlert, setCompleteAlert] = useState(false);
  const [userDataStack, setUserDataStack] = useState([]);
  

  useEffect(() => {
    const token = localStorage.getItem('token');
    const config = api.GetUserList(token);
    checkDetailAdmin()
    axios(config)
      .then((res) => {
        // console.log(res.data.message);
        setUserData(res.data.message);
        setCurrentUsers(res.data.message.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const checkDetailAdmin = () => {
    const token = localStorage.getItem('token');
    const config = api.CHECK_DETAIL_ADMMIN(token);
    axios(config)
    .then(res=> {
      //console.log(res.data.message)
    })
    .catch(err => console.log(err))
  }

  const newUserPopModal = () => {
    setNewUserModal(true);
  };

  const newUserCloseModal = () => {
    setNewUserModal(false);
    setCompleteAlert(false);
  };

  const closeNextStep = () => {
    setnextStepStatus(false);
  };

  const userAlertCloseHandle = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setCompleteAlert(false);
  };

  const [userMenu, setUsermenu] = useState(null);
  const userMenuPop = (event) => {
    setUsermenu(event.currentTarget);
  };

  const userMenuClose = () => {
    setUsermenu(null);
  };

  const userInformation = (username, password) => {
    setNewUserData({ username: username, password: password });
    if (username && password != '') {
      // setCompleteAlert(true);
      setNewUserModal(false);
      setnextStepStatus(true);
      setUserDataStack((state) => {
        const data = [...state];
        data.push({
          username: username,
          password: password,
        });
        return data;
      });
    }
  };

  let createUserModal = null;
  if (newUserModal) {
    createUserModal = (
      <CreateUser
        opened={newUserModal}
        handleClose={newUserCloseModal}
        submited={userInformation}
        userModalStatus={completeAlert}
        userModalClose={userAlertCloseHandle}
        users={usersCount}
      />
    );
  }

  const [errorUsers, setErrorUsers] = useState(false);
  const popAlert = () => {
    setErrorUsers(true);
  };
  const disAlert = () => {
    setErrorUsers(false);
  };
  let maxUsersAlert = (
    <Snackbar
      open={errorUsers}
      autoHideDuration={6000}
      onClose={disAlert}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert onClose={disAlert} severity="error">
        User has reach limit.
      </Alert>
    </Snackbar>
  );

  // useEffect(() => {
  //   console.log(userDataStack);
  //   console.log(usersCount);
  //   // console.log(nextStepStatus);
  // }, [userDataStack, currentUsers]);

  let nextStepModal = null;
  if (nextStepStatus) {
    nextStepModal = (
      <CreateDone modalStatus={nextStepStatus} closeModal={closeNextStep} />
    );
  }
  return (
    <div>
      {createUserModal}
      {nextStepModal}
      {maxUsersAlert}
      <Grid container direction="row">
        <div className={classes.headerBox}>
          {/* <p className={classes.userlistText}>User Recent Create</p> */}
          <Button
            variant="outlined"
            color="primary"
            onClick={currentUsers < usersCount.MAX_USERS ? newUserPopModal : popAlert}
            startIcon={<PersonAdd />}
          >
            Create User
          </Button>
        </div>
        {/* <Paper elevation={3} className={classes.contentPaper}>
          <Grid container justify="center">
            <UserList data={userData} />
          </Grid>
        </Paper> */}
        <div className={classes.dataTableBox}>
          <UserDataTable
            users={usersCount}
            userStatus={userMenu}
            data={userData}
            popMenu={userMenuPop}
            closeMenu={userMenuClose}
          />
        </div>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles({
  headerBox: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: '15px',
  },
  userlistText: {
    marginLeft: '21px',
    marginTop: '7px',
    fontWeight: 'bold',
    fontSize: '1.3rem',
  },
  contentPaper: {
    width: '100%',
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  dataTableBox: {
    width: '100%',
    paddingTop: '14px',
  },
});

export default ManageUser;
