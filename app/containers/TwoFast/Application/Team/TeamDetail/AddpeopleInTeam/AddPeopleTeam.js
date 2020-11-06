/* eslint-disable */
import React,{ useState, useEffect } from 'react'
import { Button } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';

import axios from 'axios'
import * as api from '../../service/api'
import MUIDataTable from 'mui-datatables';
import Avatar from 'react-avatar';
import { AiOutlineUserAdd } from "react-icons/ai";
import Lottie from 'lottie-react-web'
import pleaseCreateUser from '../../AnimationTeam/pleaseCreateUser.json'
import { notification, Modal } from 'antd';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tableContainer: {
      boxShadow: "none"
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
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


  
export default function AddPeopleTeam(props) {
    const classes = useStyles();
    const [visible, setVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [listData, setListData] = useState([])
    const tableData = [];
  
    useEffect(() => {
      mappingData()
      return () => {
        
      }
    }, [props.dataToAdd])

    const openNotificationWithIcon = (type,text) => {
        notification[type]({
            message: text,
        });
    };

    function mappingData(){
      props.dataToAdd.map((el) => {
        tableData.push([el.user_username, el.user_username, el.userdetails_firstname, el.userdetails_lastname, el]);
      });
      setListData(tableData)
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addUser = (value) => {
      const token = localStorage.getItem('token');
      const config = api.ADD_USER(token, props.dataUser.team_id ,value.user_id);
      axios(config).then( res => {
        if( res.status === 200 ){
        
          openNotificationWithIcon('warning',
              <span style={{ position:'relative', top:'4px' }}>User 
              <span style={{ color:'#faad14' }}> {value.user_username}</span> already in team
              </span>
          )

        }else if( res.status === 201){
          props.checkListUser()
          openNotificationWithIcon('success',
              <span style={{ position:'relative', top:'4px' }}>User 
              <span style={{ color:'#2196f3' }}> {value.user_username}</span> successfully added 
            </span>
          )
          
          props.checkDashboardUserInTeam()
        }
      })
      .catch( err => {

        openNotificationWithIcon('error',
                <span style={{ position:'relative', top:'4px' }}>Error
                <span style={{ color:'#F00' }}>{value.team_name}</span> Please try again
                </span>
            )

      })

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
          name: 'Add user',
          options: {
            filter: true,
            customBodyRender: (value) => {
              return <a><AiOutlineUserAdd onClick={() => addUser(value)} size={30} style={{ color:'green' }} /></a>
            },
          },
        },
      ]
    };

    return (
        <div>
            <Button type="primary" style={{ width:'100%' }} onClick={() => setVisible(true)}>Add user</Button>

            <Modal
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                footer={null} 
                width={1000}  
            >
       
          <div >

            {
              props.dataToAdd.length === 0 && (
                <div style={{width:'100%' }}>
                            <h1 style={{ textAlign:'center', color:'#6c757d' }}>User Not Found</h1>
                            <h5 style={{ textAlign:'center', color:'#6c757d' }}>Please create user before before use this section</h5>
                                <Lottie
                                    height={400}
                                        options={{
                                        animationData: pleaseCreateUser
                                        }}
                                      />
              </div>
              )
            }

            {
              props.dataToAdd.length !== 0 && (
                <MUIDataTable
                    className={classes.tableContainer}
                    title={
                        <h3 style={{ fontWeight:'bold', color:'#6c757d' }}> Add user </h3>
                    }
                    columns={state.columns}
                    data={listData}
                    options={options}
                />
              )
            }

          </div>
    
          </Modal>

        </div>
    )
}
