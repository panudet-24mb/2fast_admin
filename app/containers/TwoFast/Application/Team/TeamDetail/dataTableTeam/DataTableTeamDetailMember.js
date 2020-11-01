/* eslint-disable */
import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import * as api from '../../service/api'
import MUIDataTable from 'mui-datatables';
import Avatar from 'react-avatar';
import { makeStyles } from '@material-ui/core/styles';
import Swal from 'sweetalert2'
import { AiOutlineUserDelete } from "react-icons/ai";
import Lottie from 'lottie-react-web'
import pleaseAddUser from '../../AnimationTeam/pleaseAddUser.json'

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
  textTable : {
    marginTop:'10px'
  }
}));

export default function DataTableTeamDetailMember(props) {
  const classes = useStyles();
  const [Test, setTest] = useState([])
  const tableData = [];
  
  useEffect(() => {
    mappingData()
    return () => {
      
    }
  }, [props.dataToRemove])

  const mappingData = () => {
    props.dataToRemove.map((el) => {
      tableData.push([el.user_username, el.user_username, el.userdetails_firstname, el.userdetails_lastname, el.userdetails_position,el]);
    });
    setTest(tableData)
  }

  const options = {
    filterType: 'dropdown',
    responsive: 'stacked',
    print: false,
    selectableRows: false,
    rowsPerPage: 10,
    page: 0,
  };

  const state = {
    columns: [
      {
        name: 'Avatar',
        options: {
          filter: true,
          customBodyRender: (value) => {
            return <Avatar name={value} size="35" round={true} /> 
          },
        },
      },
      {
        name: 'Username',
        options: {
          filter: true,
          customBodyRender: (value) => {
            return <p className={classes.textTable}>{value}</p>
          },
        },
      },
      {
        name: 'Firstname',
        options: {
          filter: true,
          customBodyRender: (value) => {
            return <p className={classes.textTable}>{value}</p>
          },
        },
      },
      {
        name: 'Lastname',
        options: {
          filter: true,
          customBodyRender: (value) => {
            return <p className={classes.textTable}>{value}</p>
          },
        },
      },
      {
        name: 'position',
        options: {
          filter: true,
          customBodyRender: (value) => {
            return <p className={classes.textTable}>{value}</p>
          },
        },
      },
      {
        name: 'Remove user',
        options: {
          filter: true,
          customBodyRender: (value) => {
            return <a><AiOutlineUserDelete size={30} onClick={() => removeUser(value)} style={{ color:'#d33' }} /></a>
          },
        },
      },
    ]
  };

  const removeUser = (value) => {
    Swal.fire({
      title: 'Remove user?',
      icon: 'warning',
      text:'Are you sure you want to remove user? if you remove user, your will permanently lose your user.',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#908F8F',
      confirmButtonText: 'Remove user'
    }).then((result) => {
      if (result.isConfirmed) {
        const token = localStorage.getItem('token');
        const config = api.REMOVE_USER(token, props.dataTeam.team_id, value.user_id);
        axios(config).then( res => {
          
        })
        .catch( err => {
          if(err.response.status === 404){
              props.checkDashboardUserInTeam()
              Swal.fire({
                icon: 'success',
                title: 'Remove success',
                showConfirmButton: false,
                timer: 1500
              })
          } else {
            props.checkDashboardUserInTeam()
              Swal.fire({
                icon: 'error',
                title: 'Remove error please try again',
                showConfirmButton: false,
                timer: 1500
              })
          }
          
        } )
      }
    })
      
  }

  return (
    <div>
    {
      props.dataToRemove.length === 0 &&(
        <div style={{width:'100%' }}>
            <h1 style={{ textAlign:'center', color:'#6c757d' }}>User Not Found</h1>
            <h5 style={{ textAlign:'center', color:'#6c757d' }}>Please add user in team</h5>
                <Lottie
                    height={400}
                      options={{
                          animationData: pleaseAddUser
                              }}
                            />
        </div>
      )
    }

    {
      props.dataToRemove.length !== 0 &&(
        <MUIDataTable
            title={
                <h3 style={{ fontWeight:'bold', color:'#6c757d' }}> User </h3>
            }
            columns={state.columns}
            data={Test}
            options={options}
        />
      )
    }

    </div>
  )
}
