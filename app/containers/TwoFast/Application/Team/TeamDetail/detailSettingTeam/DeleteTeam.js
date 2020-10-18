/* eslint-disable */
import React,{ useState } from 'react'
import Expand from 'react-expand-animated';
import { FiChevronDown , FiChevronRight } from "react-icons/fi";
import { makeStyles } from '@material-ui/core/styles';
import Swal from 'sweetalert2'
import axios from 'axios';
import * as api from '../../../../services/api';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';

const useStyles = makeStyles((theme) => ({

  }));


export default function DeleteTeam(props) {
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

    const showTest = () => {
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
                deleteTeam()
            }
          })

    }

    const deleteTeam = () => {
        const token = localStorage.getItem('token');
        const config = api.DELETE_TEAM(token, dataTeam.team_id);
        axios(config).then((res) => {
            Swal.fire({
                title: 'Remove Success',
                icon:'success',
                timer: 2000,
                onClose: () => {
                    history.push("/app/manage-team");
                  }
            })
        })
        .catch( (err) =>{
            Swal.fire({
                title: 'Delete Success!!',
                icon:'success',
                timer: 2000,
                onClose: () => {
                    history.push("/app/manage-team");
                  }
            })
        } )
    }


    return (
        <div className="row">
            <div className="col-4"  onClick={() => setToggle()}>
                <h5> {icon} Remove team</h5>
            </div>
            <div className="col-8">
                <p style={{ color:'rgb(108, 117, 125)' }}>Make sure your want Remove your team ?</p>

                <Expand open={open} duration={500}>
                    <div style={{ width: '100%', borderRadius:'17px', padding:'10px' }}>
                            <p style={{ color:'red' }}>Danger !!! this action can't be undo</p>
                            <Button type="primary" danger style={{width:'200px'}} onClick={() => showTest()}>Remove team</Button>
                    </div>
                </Expand>
            </div>
        </div> 
    )
}