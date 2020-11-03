/* eslint-disable */
import React,{ useState, useEffect } from 'react'
import { Paper, ButtonBase } from '@material-ui/core';
import { CardInfoStyle } from './Style';
import AddTeam from './image/AddTeam.svg'
import AddUser from './image/AddUser1.svg'
import { Modal, Button } from 'antd';
import axios from 'axios'
import * as api from '../../service/api_project'
import ListUserTable from './ListUserTable'

export default function AddTeamAndUserInProject(props) {
    const classes = CardInfoStyle();
    const [visibleTeam, setVisibleTeam] = useState(false);
    const [visibleUser, setVisibleUser] = useState(false);
    const [allUser, setAllUser] = useState([])

    //console.log(props.detailProject);

    useEffect(() => {
        listUser()
        listTeam()
        return () => {
            
        }
    }, [])
    
    const listUser =()=> {
        const token = localStorage.getItem('token');
        const config = api.FIND_USER_LIST(token);
        axios(config).then(res => setAllUser(res.data.message))
    }

    const listTeam =()=> {
        const token = localStorage.getItem('token');
        const config = api.FIND_TEAM_LIST(token);
        // axios(config).then(res => console.log(res.data))
        // .catch( err => console.log(err))
    }

    return (
        <div>
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
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
                    <p>Team</p>
                </Modal>

                <Modal
                    centered
                    visible={visibleUser}
                    onOk={() => setVisibleUser(false)}
                    onCancel={() => setVisibleUser(false)}
                    footer={null}   
                    width={1000}
                >
                    <ListUserTable allUser={allUser}/>
                </Modal>


                <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                    Table
                   
                </div>
            </div>
        </div>
    )
}
