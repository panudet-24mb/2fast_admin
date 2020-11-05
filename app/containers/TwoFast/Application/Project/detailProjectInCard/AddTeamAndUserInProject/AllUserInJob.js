/* eslint-disable */
import React,{ useState, useEffect } from 'react'
import MUIDataTable from 'mui-datatables';
import DisplayIconAvatar from '../../../Team/selectTeamIcon/DisplayIconAvatar'
import Avatar from 'react-avatar';
import { AiOutlineUserDelete, AiOutlineUsergroupDelete } from "react-icons/ai";
import * as api from '../../service/api_project'
import axios from 'axios'

export default function AllUserInJob(props) {
    const [data, setData] = useState([])
    const tableData = [];

    useEffect(() => {

        concatData()
        return () => {

        }
    }, [props.team, props.user])

    const concatData=()=>{
        var testCC = props.user.concat(props.team)
        testCC.map( el => {
            tableData.push([ el ,el.user_username || el.team_name, el.status_name, el, el ]);
        })

        setData(tableData);
    }

    const remove = (value) => {
        const token = localStorage.getItem('token');
        if(value.user_username){
            const data = {
                user_id : value.user_id,
                is_active : 1 ,
                status_id : 1
            }
            const config = api.DELETE_USER_IN_JOB(token, props.detailProject.project_id, data);
            axios(config).then(res => {
                console.log(res.data)
                props.listTeamInProject()
            })
            .catch( err => console.log(err))
        } else if(value.team_name){
            const data = {
                team_id : value.team_id,
                is_active : 1 ,
                status_id : 1
            }
            const config = api.DELETE_TEAM_IN_JOB(token, props.detailProject.project_id, data);
            axios(config).then(res => {
                console.log(res.data)
                props.listTeamInProject()
            })
            .catch( err => console.log(err))
        }
        //props.mainFunction()
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
                  setCellHeaderProps: () => ({ style: { left:'120px' }}),
                  customBodyRender: (value) => {
                   if(value.team_name){
                       return <DisplayIconAvatar avatarUser={value} sizeIcon={50} sizeAvatar={70} styleMarginLeft={109} />
                   } else if(value.user_username){
                       return <Avatar style={{ display: 'flex', marginLeft:'109px' }} name={value.user_username} size="70" round={true} /> 
                   }
                  },
                },
            },
          {
            name: 'Name',
            options: {
              filter: true,
              customBodyRender: (value) => {
                return <h5>{value}</h5>
              },
            },
          },
          {
            name: 'Status',
            options: {
              filter: true,
              customBodyRender: (value) => {
                return <h5>{value}</h5>
              },
            },
          },
          {
            name: 'Type',
            options: {
              filter: true,
              customBodyRender: (value) => {
                if(value.user_username){
                    return <h5 style={{ color:'#f79c65', fontWeight:'bold' }} >User</h5>
                } else if(value.team_name){
                    return <h5 style={{ color:'#4dabf5', fontWeight:'bold' }} >Team</h5>
                }
              },
            },
          },
          {
            name: 'Delete',
            options: {
              filter: true,
              customBodyRender: (value) => {
                // return <button onClick={() => console.log(value)}>check</button>
                if(value.user_username){
                    return <a><AiOutlineUserDelete size={30} style={{ color:'#F00' }} onClick={() => remove(value)} /></a>
                } else if(value.team_name){
                    return <a><AiOutlineUsergroupDelete size={30} style={{ color:'#F00' }} onClick={() => remove(value)} /></a>
                }
              },
            },
          },
        ]
      };
    return (
        <div>
            <MUIDataTable
                title={
                    <h3 style={{ fontWeight:'bold', color:'#6c757d' }}> Team An User In Job</h3>
                    }
                columns={state.columns}
                data={data}
                options={options}
            />
        </div>
    )
}
