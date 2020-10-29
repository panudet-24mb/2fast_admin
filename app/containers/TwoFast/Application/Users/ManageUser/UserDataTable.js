/* eslint-disable */
import React, { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables';
// import { usePopper } from 'react-popper';
// import { createPopper } from '@popperjs/core';
import Avatar from 'react-avatar';
// import { MDBDataTableV5 } from 'mdbreact';
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import {
  Tooltip,
  Chip,
  IconButton,
  Popper,
  List,
  ListItem,
  Divider,
} from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';

import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import MoreVert from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';

import { userData } from '../dummy-data/dummy-user';

// const getMuiTheme = () =>
//   createMuiTheme({
//     overrides: {
//       MuiPaper: {
//         rounded: {
//           borderRadius: '11px',
//         },
//       },
//       MuiTableCell: {
//         root: {
//           padding: 3,
//         },
//       },
//       MUIDataTable: {
//         root: {
//           backgroundColor: '#FF000',
//         },
//       },
//       MUIDataTableBodyCell: {
//         root: {
//           // backgroundColor: '#FF0000',
//         },
//       },
//       MuiTypography: {
//         root: {},
//         h6: {
//           paddingTop: '27px',
//         },
//       },
//     },
//   });

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
      // [theme.breakpoints.down('md')]: {
      //   '& td': {
      //     height: 60,
      //     overflow: 'hidden',
      //     textOverflow: 'ellipsis',
      //   },
      // },
    },
  },
}));

const UserDataTable = (props) => {
  const classes = useStyles();
  const { users, userStatus, popMenu, closeMenu, data } = props;

  // const [anchorEl, setAnchorEl] = useState(null);

  const tableData = [];
  data.map((el) => {
    tableData.push([el.userdetails_avatar, el.user_username, el.userdetails_firstname, el.userdetails_lastname, "User", el.user_is_active, el]);
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {    
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  // console.log(anchorEl);

  useEffect(() => {
    // console.log(data);
    // console.log(tableData);
  }, [data]);

  const state = {
    columns: [
      {
        name: 'Avatar',

        options: {
          filter: true,
          setCellHeaderProps: () => ({ style: {display: 'flex', justifyContent: 'center' }}),
          customBodyRender: (value) => {
            return (
              <div>
                 <Avatar style={{ display: 'flex', marginLeft:'auto', marginRight:'auto' }} name={value} size="35" round={true} /> 
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
        name: 'Edit',
        options: {
          filter: true,
          customBodyRender: (value) => {
            return (
              <div>
                  <button onClick={() => console.log(value)}>Edit</button>
              </div>
            );
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
      <MUIDataTable
        title={
          'User lists ( ' + users.currentUsers + ' / ' + users.MAX_USERS + ' )'
        }
        columns={state.columns}
        data={state.data}
        options={options}
      />

      {/*<Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="left-start"
        style={{ zIndex: 1000 }}
      >
        <Paper elevation={2}>
          <List component="nav">
            <ListItem button onClick={handleClick}>Edit user</ListItem>
             
            <ListItem button>None</ListItem>
          </List>
        </Paper>
      </Popper>*/}
    

    </div>
  );
};

export default UserDataTable;
