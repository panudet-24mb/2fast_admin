/* eslint-disable */
import React,{ useState } from 'react'
import Expand from 'react-expand-animated';
import { FiChevronDown , FiChevronRight } from "react-icons/fi";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import * as api from '../../../../services/api';
import { useHistory } from 'react-router-dom';
import { Button, Input  } from 'antd';

const useStyles = makeStyles((theme) => ({
    
  }));


export default function ChangeAvatar(props) {
    const classes = useStyles();
    const history = useHistory();
    const [dataTeam, setDataTeam] = useState(props.detailTeam)

    const [open, setOpen] = useState(false)
    const [icon, setIcon] = useState(<FiChevronRight size={25} style={{ marginBottom : '5px'}}/>)
    
    const setToggle = () =>{
        if(open===false){
            setOpen(true)
            setIcon(<FiChevronDown size={25} style={{ marginBottom : '5px'}}/>)
        } else {
            setOpen(false)
            setIcon(<FiChevronRight size={25} style={{ marginBottom : '5px'}}/>)
        }
    }

    return (
        <div className="row">
            <div className="col-4" onClick={() => setToggle()}>
                <h5> {icon} Change avatar</h5>
            </div>
            <div className="col-8">
                <p style={{ color:'rgb(108, 117, 125)' }}>Make sure your want Change avatar ?</p>

                <Expand open={open} duration={500}>
                    <div style={{ width: '100%', borderRadius:'17px', padding:'10px' }}>
                            <p>You can change team name anytime !</p>
        
                    </div> 
                </Expand>
            </div>
        </div> 
    )
}