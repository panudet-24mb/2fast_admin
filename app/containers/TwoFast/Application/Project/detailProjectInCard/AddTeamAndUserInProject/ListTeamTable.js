/* eslint-disable */
import React,{ useEffect, useState } from 'react'
import MUIDataTable from 'mui-datatables';
import DisplayIconAvatar from '../../../Team/selectTeamIcon/DisplayIconAvatar'
import * as api from '../../service/api_project'
import axios from 'axios'
import { AiOutlineUsergroupAdd } from "react-icons/ai";

export default function ListTeamTable(props) {
    const [team, setTeam] = useState([])
    const tableData = [];
    //console.log(props.detailProject.project_id);
    useEffect(() => {
        mappingData()
        return () => {

        }
    }, [])

    function mappingData(){
        props.allTeam.map((el) => {
            tableData.push([ el, el.team_name, el ]);
          });
          setTeam(tableData)
    }

    function addTeam(value) {
        const data = {
            team_id : value.team_id,
            is_active : 1 ,
            status_id : 1
        }
        const token = localStorage.getItem('token');
        const config = api.ADD_TEAM_IN_PROJECT(token, props.detailProject.project_id, data);
        axios(config).then(res => {
            console.log(res.data)
            props.listTeamInProject()
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
            <MUIDataTable
                title={
                    <h3 style={{ fontWeight:'bold', color:'#6c757d' }}> Add team in project</h3>
                    }
                columns={state.columns}
                data={team}
                options={options}
            />
        </div>
    )
}
