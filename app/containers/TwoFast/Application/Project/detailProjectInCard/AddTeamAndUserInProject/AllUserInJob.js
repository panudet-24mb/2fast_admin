/* eslint-disable */
import React,{ useState, useEffect } from 'react'
import MUIDataTable from 'mui-datatables';
import DisplayIconAvatar from '../../../Team/selectTeamIcon/DisplayIconAvatar'
import Avatar from 'react-avatar';
import { AiOutlineUserDelete, AiOutlineUsergroupDelete } from "react-icons/ai";
import * as api from '../../service/api_project'
import axios from 'axios'
import Swal from 'sweetalert2'
import Lottie from 'lottie-react-web'
import noCreateTeam from '../../AnimationProject/noCreateTeam.json'

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

          Swal.fire({
            title: 'Remove your user?',
            icon: 'warning',
            text:'Are you sure you want to remove your user? if you remove your user, your will permanently lose your user.',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#908F8F',
            confirmButtonText: 'Remove user'
          }).then((result) => {

            if (result.isConfirmed) {
              const config = api.DELETE_USER_IN_PROJECT(token, value.project_has_user_id);
              axios(config).then(res => {
                  Swal.fire({
                    title: `Can't remove your user Please remove later`,
                    icon:'error',
                    timer: 2000,
                })
              })
              .catch( error => {
                if(error.response.status === 404){
                  Swal.fire({
                      title: 'Remove Success',
                      icon:'success',
                      timer: 2000,
                      onClose: () => {
                        props.mainFunction()
                      }
                  })
              } else {
                  Swal.fire({
                      title: `Can't remove your user Please remove later`,
                      icon:'error',
                      timer: 2000,
                  })
              }
              })
             
            }
          })

            // const config = api.DELETE_USER_IN_PROJECT(token, value.project_has_user_id);
            // axios(config).then(res => {
            //     console.log(res.data)
            //     props.mainFunction()
            // })
            // .catch( err => console.log(err))

        } else if(value.team_name){
          Swal.fire({
            title: 'Remove your team?',
            icon: 'warning',
            text:'Are you sure you want to remove your team? if you remove your team, your will permanently lose your team.',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#908F8F',
            confirmButtonText: 'Remove Team'
          }).then((result) => {

            if (result.isConfirmed) {
         
              const config = api.DELETE_TEAM_IN_PROJECT(token, value.project_has_team_id);
              axios(config).then(res => {
                  Swal.fire({
                    title: `Can't remove your team Please remove later`,
                    icon:'error',
                    timer: 2000,
                })
              })
              .catch( error => {

                console.log(error);
                if(error.response.status === 404){
                  Swal.fire({
                      title: 'Remove Success',
                      icon:'success',
                      timer: 2000,
                      onClose: () => {
                        props.mainFunction()
                      }
                  })
              } else {
                  Swal.fire({
                      title: `Can't remove your team Please remove later`,
                      icon:'error',
                      timer: 2000,
                  })
              }
              })
             
            }
          })
    
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
        {
          data.length === 0 && (
            <div>
                <h1 style={{ textAlign:'center', color:'#6c757d' }}>No Team Create</h1>
                <h5 style={{ textAlign:'center', color:'#6c757d' }}>Please create team</h5>
                <Lottie
                    height={400}
                    options={{
                          animationData: noCreateTeam
                            }}
                          />
            </div>
          )
        }
        {
          data.length !== 0 && (
            <MUIDataTable
                title={
                    <h3 style={{ fontWeight:'bold', color:'#6c757d' }}> Team and user</h3>
                    }
                columns={state.columns}
                data={data}
                options={options}
            />
          )
        }
            
        </div>
    )
}
