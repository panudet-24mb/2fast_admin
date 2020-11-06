/* eslint-disable */
import React,{ useEffect, useState } from 'react'
import MUIDataTable from 'mui-datatables';
import DisplayIconAvatar from '../../../Team/selectTeamIcon/DisplayIconAvatar'
import * as api from '../../service/api_project'
import axios from 'axios'
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import Lottie from 'lottie-react-web'
import pleaseCreateUser from '../../AnimationProject/pleaseCreateUser.json'
import { notification } from 'antd';

export default function ListTeamTable(props) {
    const [team, setTeam] = useState([])
    const tableData = [];
    //console.log(props.detailProject.project_id);
    useEffect(() => {
        mappingData()
        return () => {

        }
    }, [props.allTeam])

    function mappingData(){
        props.allTeam.map((el) => {
            tableData.push([ el, el.team_name, el ]);
          });
          setTeam(tableData)
    }

    const openNotificationWithIcon = (type,text) => {
        notification[type]({
            message: text,
        });
    };

    function addTeam(value) {
        var test = <p style={{ color:'#2196f3' }}>{value.team_name}</p>
        const data = {
            team_id : value.team_id,
            is_active : 1 ,
            status_id : 1
        }
        const token = localStorage.getItem('token');
        const config = api.ADD_TEAM_IN_PROJECT(token, props.detailProject.project_id, data);
        axios(config).then(res => {
          
          openNotificationWithIcon('success',
              <span style={{ position:'relative', top:'4px' }}>Add team 
              <span style={{ color:'#2196f3' }}>{value.team_name}</span> success
              </span>
          )
            props.listTeamInProject()
        })
        .catch( err =>{
          if(err.response.status === 409){
            
            openNotificationWithIcon('warning',
                <span style={{ position:'relative', top:'4px' }}>Team 
                <span style={{ color:'#faad14' }}>{value.team_name}</span> already active
                </span>
            )
  
          } else {
            
            openNotificationWithIcon('error',
                <span style={{ position:'relative', top:'4px' }}>Can't add team 
                <span style={{ color:'#F00' }}>{value.team_name}</span> Please try again
                </span>
            )
  
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
                  setCellHeaderProps: () => ({ style: { left:'65px' }}),
                  customBodyRender: (value) => {
                    return <DisplayIconAvatar avatarUser={value} sizeIcon={50} sizeAvatar={70} styleMarginLeft={50} />
                  },
                },
            },
          {
            name: 'Team name',
            options: {
              filter: true,
              customBodyRender: (value) => {
                return <h5>{value}</h5>
              },
            },
          },
          {
            name: 'Add team',
            options: {
              filter: true,
              customBodyRender: (value) => {
                return <a><AiOutlineUsergroupAdd onClick={() => addTeam(value)} size={30} style={{ color:'green' }} /></a>
              },
            },
          },
        ]
      };
    

    return (
        <div>
        {
          team.length === 0 && (
            <div>
                <h1 style={{ textAlign:'center', color:'#6c757d' }}>No Team Create</h1>
                <h5 style={{ textAlign:'center', color:'#6c757d' }}>Please create team</h5>
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
          team.length !== 0 && (
            <MUIDataTable
                title={
                    <h3 style={{ fontWeight:'bold', color:'#6c757d' }}> Add team in project</h3>
                    }
                columns={state.columns}
                data={team}
                options={options}
            />
          )
        }
            
        </div>
    )
}
