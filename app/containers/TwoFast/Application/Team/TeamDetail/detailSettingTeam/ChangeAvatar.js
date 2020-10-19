/* eslint-disable */
import React,{ useState } from 'react'
import Expand from 'react-expand-animated';
import { FiChevronDown , FiChevronRight } from "react-icons/fi";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import * as api from '../../../../services/api';
import { useHistory } from 'react-router-dom';
import { Button, Input  } from 'antd';
import Swal from 'sweetalert2'
import DisplayIconAvatar from '../../selectTeamIcon/DisplayIconAvatar'
import SelectAvatar from '../../selectTeamIcon/SelectAvatar'

const useStyles = makeStyles((theme) => ({
    
  }));


export default function ChangeAvatar(props) {
    const classes = useStyles();
    const history = useHistory();
    const [dataOld, setDataOld] = useState(props.detailTeam)
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

    const handleChange = (stateValue , newValue) => {
        setDataTeam({...dataTeam, [stateValue] : newValue})
      }
    
    const sendNewAvatar = () =>{
        const token = localStorage.getItem('token');
        const config = api.UPDATE_AVATAR_ICON(token, dataTeam.team_id, dataTeam.team_avatar_icon , dataTeam.team_avatar_color );
        axios(config).then((res) => {
            Swal.fire({
                title: 'Change avatar success !!',
                icon:'success',
                timer: 2000,
            })
        })
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
                            <p>You can change avatar anytime !</p>
                            <DisplayIconAvatar avatarUser={dataTeam} sizeIcon={50} sizeAvatar={70} styleMarginLeft={95} />
                            <hr />
                            <SelectAvatar value={dataTeam} onClick={handleChange}/>
                            <Button style={{ width:'100px' }} onClick={() => setDataTeam(dataOld)}>Discard</Button> &nbsp;&nbsp;&nbsp;
                            <Button type="primary" style={{ width:'100px' }} onClick={() => sendNewAvatar()}>Save</Button>
                    </div> 
                </Expand>
            </div>
        </div> 
    )
}