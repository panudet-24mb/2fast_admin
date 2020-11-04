/* eslint-disable */
import React,{ useEffect, useState } from 'react'
import MUIDataTable from 'mui-datatables';
import Avatar from 'react-avatar';
import { AiOutlineUserAdd } from "react-icons/ai";
import * as api from '../../service/api_project'
import axios from 'axios'

export default function ListUserTable(props) {
    const [user, setUser] = useState([])
    const tableData = [];
    // console.log(props.detailProject);

    useEffect(() => {
        mappingData()
        return () => {
            
        }
    }, [])

    const mappingData = () => {
        props.allUser.map((el) => {
            tableData.push([el.user_username, el.user_username, el.userdetails_firstname, el.userdetails_lastname, el]);
          });
          setUser(tableData)
    }

    function addUser(value) {
      const data = {
          user_id : value.user_id,
          is_active : 1 ,
          status_id : 1
      }
      const token = localStorage.getItem('token');
      const config = api.ADD_USER_IN_PROJECT(token, props.detailProject.project_id, data);
      axios(config).then(res => {
          console.log(res.data)
          props.listUserInProject()
      })
      .catch( err => console.log(err))
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
            <MUIDataTable
                title={
                    <h3 style={{ fontWeight:'bold', color:'#6c757d' }}> Add user in project</h3>
                    }
                columns={state.columns}
                data={user}
                options={options}
            />
        </div>
    )
}
