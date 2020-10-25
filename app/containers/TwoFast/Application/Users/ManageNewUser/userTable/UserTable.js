/* eslint-disable */
import React, { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables';
import Avatar from 'react-avatar';
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import { Button, Modal, Input  } from 'antd';
import {
  Chip,
  IconButton
} from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';
import { UserOutlined } from '@ant-design/icons';
import EditUser from './EditUser'
import CreateDetailUser from './CreateDetailUser'
import Lottie from 'lottie-react-web'
import no_create_user from '../Animation/no_create_user.json'

const useStyles = makeStyles((theme) => ({
  userAction: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  table: {
    '& > div': {
      overflow: 'auto',
    },
    '& table': {
      '& td': {
        wordBreak: 'keep-all',
      },
    },
  },
}));

const UserTable = (props) => {
  const classes = useStyles();
  const { listUser, limitCreateUser } = props;
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState()

  
  const tableData = [];

  listUser.map((el) => {
    tableData.push([el.user_username, el.user_username, el.userdetails_firstname, el.userdetails_lastname, "User", el.user_is_active, el]);
  });

  const state = {
    columns: [
      {
        name: 'Avatar',
        options: {
          filter: true,
          //setCellHeaderProps: () => ({ style: {display: 'flex', justifyContent: 'center' }}),
          customBodyRender: (value) => {
            return (
            //   <div>
            //      <Avatar style={{ display: 'flex', marginLeft:'auto', marginRight:'auto' }} name={value} size="35" round={true} /> 
            //   </div>
            <div>
                 <Avatar name={value} size="35" round={true} /> 
              </div>
            );
          },
        },
      },
      {
        name: 'Username',
        options: {
          filter: true,
          customBodyRender: (value) => {
            return (
              <div>
                <p>{value}</p>
              </div>
            );
          },
        },
      },
      {
        name: 'Firstname',
        options: {
          filter: true,
          customBodyRender: (value) => {
            return (
              <div>
                <p>{value}</p>
              </div>
            );
          },
        },
      },
      {
        name: 'Lastname',
        options: {
          filter: true,
          customBodyRender: (value) => {
            return (
              <div>
                <p>{value}</p>
              </div>
            );
          },
        },
      },
      {
        name: 'Role',
        options: {
          filter: true,
          customBodyRender: (value) => {
            return (
              <div>
                <p>{value}</p>
              </div>
            );
          },
        },
      },
      {
        name: 'Status',
        options: {
          filter: true,
          customBodyRender: (value) => {
            if (value) {
              return (
                <div className={classes.userAction}>
                  <Chip
                    label="Active"
                    variant="default"
                    style={{ backgroundColor: '#304ffe', color: 'white' }}
                  />
                </div>
              );
            } else {
              return (
                <div className={classes.userAction}>
                  <Chip
                    label="Non active"
                    variant="default"
                    style={{ backgroundColor: '#3f51b5', color: 'white' }}
                  />
                </div>
              );
            }
          },
        },
      },
      {
        name: '',
        options: {
          filter: true,
          customBodyRender: (value) => {
            
            if(value.userdetails_firstname === null){
                return (
                  <CreateDetailUser value={value} checkData={props.checkData}/>
                );
            } else {
                return (
                  <EditUser value={value} checkData={props.checkData}/>
                );
            }
          },
        },
      },
    ],
    data: tableData,
  };

  const options = {
    filterType: 'dropdown',
    responsive: 'stacked',
    print: false,
    selectableRows: false,
    rowsPerPage: 10,
    page: 0,
  };

  return (
    <div className={classes.table}>
    <br />

    {
      limitCreateUser.current_user_active !== 0 && (
        <MUIDataTable
        title={
            <h3 style={{ fontWeight:'bold', color:'#6c757d' }}>Limit create user {`( ${limitCreateUser.current_user_active} / ${limitCreateUser.user_limit} )`} </h3>
        }
        columns={state.columns}
        data={state.data}
        options={options}
      /> 
      )
    }
    {
      limitCreateUser.current_user_active === 0 && (
        <div style={{width:'100%'}}>
            <h1 style={{ textAlign:'center', color:'#6c757d' }}>No User Create</h1>
            <h5 style={{ textAlign:'center', color:'#6c757d' }}>Please create user</h5>
                <Lottie
                    height={400}
                    options={{
                          animationData: no_create_user
                            }}
                          />
        </div>
      )
    }

    </div>
  );
};

export default UserTable;

// value={this.state.someVal || ''}