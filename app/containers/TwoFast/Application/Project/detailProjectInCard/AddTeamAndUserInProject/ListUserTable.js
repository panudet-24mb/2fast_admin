/* eslint-disable */
import React,{ useEffect, useState } from 'react'
import MUIDataTable from 'mui-datatables';
import Avatar from 'react-avatar';
import { AiOutlineUserAdd } from "react-icons/ai";
import * as api from '../../service/api_project'
import axios from 'axios'
import Lottie from 'lottie-react-web'
import pleaseCreateUser from '../../AnimationProject/pleaseCreateUser.json'
import { notification } from 'antd';


export default function ListUserTable(props) {

    const [user, setUser] = useState([])
    const tableData = [];
    // console.log(props.detailProject);

    useEffect(() => {
        mappingData()
        return () => {
            
        }
    }, [props.allUser])

    const mappingData = () => {
        props.allUser.map((el) => {
            tableData.push([el.user_username, el.user_username, el.userdetails_firstname, el.userdetails_lastname, el]);
          });
          setUser(tableData)
    }

    const openNotificationWithIcon = (type,text) => {
        notification[type]({
            message: text,
        });
    };

    function addUser(value) {

      const data = {
          user_id : value.user_id,
          is_active : 1 ,
          status_id : 1
      }
      const token = localStorage.getItem('token');
      const config = api.ADD_USER_IN_PROJECT(token, props.detailProject.project_id, data);
      axios(config).then(res => {
        
        openNotificationWithIcon('success',<span style={{ position:'relative', top:'4px' }}>Add user <span style={{ color:'#2196f3' }}>{value.user_username}</span> success</span>)

          props.listUserInProject()
      })
      .catch( err =>{
        if(err.response.status === 409){
          
          openNotificationWithIcon('warning',<span style={{ position:'relative', top:'4px' }}>User <span style={{ color:'#faad14' }}>{value.user_username}</span> already active</span>)

        } else {
          
          openNotificationWithIcon('error',<span style={{ position:'relative', top:'4px' }}>Can't add user <span style={{ color:'#F00' }}>{value.user_username}</span> Please try again</span>)

        }

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
                  setCellHeaderProps: () => ({ style: { left:'35px' }}),
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
                return <h5>{value}</h5>
              },
            },
          },
          {
            name: 'First name',
            options: {
              filter: true,
              customBodyRender: (value) => {
                return <h5>{value}</h5>
              },
            },
          },
          {
            name: 'Last name',
            options: {
              filter: true,
              customBodyRender: (value) => {
                return <h5>{value}</h5>
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
        {
          user.length === 0 && (
            <div>
                <h1 style={{ textAlign:'center', color:'#6c757d' }}>No User Create</h1>
                <h5 style={{ textAlign:'center', color:'#6c757d' }}>Please create user</h5>
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
          user.length !== 0 && (
            <MUIDataTable
                title={
                    <h3 style={{ fontWeight:'bold', color:'#6c757d' }}> Add user in project</h3>
                    }
                columns={state.columns}
                data={user}
                options={options}
            />
          )
        }
           
        </div>
    )
}
