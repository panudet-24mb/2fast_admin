/* eslint-disable */
import React,{ useState, useEffect } from 'react'
import { Paper, ButtonBase } from '@material-ui/core';
import { CardInfoStyle } from './Style';
import AddTeam from './image/AddTeam.svg'
import AddUser from './image/AddUser1.svg'
import { Modal, notification, Button } from 'antd';
import axios from 'axios'
import * as api from '../../service/api_project'
import ListUserTable from './ListUserTable'
import ListTeamTable from './ListTeamTable'
import AllUserInJob from './AllUserInJob'

export default function AddTeamAndUserInProject(props) {

    const classes = CardInfoStyle();
    const [visibleTeam, setVisibleTeam] = useState(false);
    const [visibleUser, setVisibleUser] = useState(false);
    const [allUser, setAllUser] = useState([])
    const [allTeam, setAllTeam] = useState([])

    const [user, setUser] = useState([])
    const [team, setTeam] = useState([])

    // console.log(props.detailProject.project_id);
    


    async function listUser(){
        const token = localStorage.getItem('token');
        const config = api.FIND_USER_LIST(token);
        const result = await axios(config)
        setAllUser(result.data.message);
    }
    
    async function listTeam(){
        const token = localStorage.getItem('token');
        const config = api.FIND_TEAM_LIST(token);
        const result = await  axios(config)
        setAllTeam(result.data.message);
    }

    async function listTeamInProject(){
        const token = localStorage.getItem('token');
        const config = api.CHECK_TEAM_IN_PROJECT(token, props.detailProject.project_id);
        const result = await  axios(config)
        setTeam(result.data.payload.team);
    }
    async function  listUserInProject(){
        const token = localStorage.getItem('token');
        const config = api.CHECK_USER_IN_PROJECT(token, props.detailProject.project_id);
        const result = await  axios(config)
        setUser(result.data.payload.user);
    }


    useEffect(() => {
        listUser()
        listTeam()
        listTeamInProject()
        listUserInProject()

        return () => {
         

        }
    }, [])

    const mainFunction = () => {

        listUser()
        listTeam()
        listTeamInProject()
        listUserInProject()
    }


    return (
        <div>
            <div className="row">
                <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <div className="row">
                        <div className="col" style={{ padding:'20px' }}>
                        <ButtonBase className={classes.buttonBase} onClick={() => setVisibleTeam(true)}>
                                <Paper elevation={1} className={classes.newteamCard}>
                                    <div className={classes.card}>
                                        <div className={classes.newteamContent}>
                                            <img src={AddTeam} style={{ width:'120px' }} />
                                            <p className={classes.newteamText} style={{ color:'#4dabf5' }}>Add Team</p>
                                        </div>
                                    </div>
                                </Paper>
                            </ButtonBase>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{padding:'20px' }}>
                        <ButtonBase className={classes.buttonBase} onClick={() => setVisibleUser(true)}>
                                <Paper elevation={1} className={classes.newteamCardUser}>
                                    <div className={classes.card}>
                                        <div className={classes.newteamContent}>
                                            <img src={AddUser} style={{ width:'140px' }} />
                                            <p className={classes.newteamText} style={{ color:'#f79c65' }}>Add User</p>
                                        </div>
                                    </div>
                                </Paper>
                            </ButtonBase>
                        </div>
                    </div>
                </div>
                
                <Modal
                    centered
                    visible={visibleTeam}
                    onOk={() => setVisibleTeam(false)}
                    onCancel={() => setVisibleTeam(false)}
                    footer={null} 
                    width={1000}  
                >
                    <ListTeamTable listTeamInProject={listTeamInProject} allTeam={allTeam} detailProject={props.detailProject}/>
                </Modal>

                <Modal
                    centered
                    visible={visibleUser}
                    onOk={() => setVisibleUser(false)}
                    onCancel={() => setVisibleUser(false)}
                    footer={null}   
                    width={1000}
                >
                
                    <ListUserTable listUserInProject={listUserInProject} allUser={allUser} detailProject={props.detailProject}/>
                </Modal>


                <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                    <AllUserInJob user={user} team={team} mainFunction={mainFunction} detailProject={props.detailProject}/>
                </div>
            </div>
        </div>
    )
}
