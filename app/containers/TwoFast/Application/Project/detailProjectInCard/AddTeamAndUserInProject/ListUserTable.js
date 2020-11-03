/* eslint-disable */
import React,{ useEffect, useState } from 'react'
import MUIDataTable from 'mui-datatables';
import Avatar from 'react-avatar';

export default function ListUserTable(props) {
    const [user, setUser] = useState([])
    const tableData = [];
    console.log(props.allUser);

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
                return <p>{value}</p>
              },
            },
          },
          {
            name: 'First name',
            options: {
              filter: true,
              customBodyRender: (value) => {
                return <p>{value}</p>
              },
            },
          },
          {
            name: 'Last name',
            options: {
              filter: true,
              customBodyRender: (value) => {
                return <p>{value}</p>
              },
            },
          },
          {
            name: 'Add user',
            options: {
              filter: true,
              customBodyRender: (value) => {
                return <p onClick={() => console.log(value)}>Add User</p>
              },
            },
          },
        ]
      };

    return (
        <div>
            <MUIDataTable
                title={
                    <h3 style={{ fontWeight:'bold', color:'#6c757d' }}> Add User </h3>
                    }
                columns={state.columns}
                data={user}
                options={options}
            />
        </div>
    )
}
