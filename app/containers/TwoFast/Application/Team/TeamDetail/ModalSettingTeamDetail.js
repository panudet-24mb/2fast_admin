/* eslint-disable */
import React,{ useState } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red'
import Swal from 'sweetalert2'
import axios from 'axios';
import * as api from '../../../services/api';
import { useHistory } from 'react-router-dom';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    redColor: {
        color: '#fff',
        backgroundColor: red[500]
    }
  }));

export default function ModalSettingTeamDetail(props) {
    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const [dataTeam, setDataTeamr] = useState(props.dataUser)

    const switchIcon = props.test
    const onchangeDisplaySetiingAndTable = () => {
        props.changeDisplaySetiingAndTable()
    }
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const showTest = () => {
        setOpen(false);
        Swal.fire({
            title: 'Delete your team?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
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
                title: 'Delete Success!!',
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
    <div>
        {
            switchIcon === true &&(
                <div>
                    <IconButton color="primary" aria-label="setting" component="span" style={{ bottom:'7px', right:'10px' }}
                        onClick={onchangeDisplaySetiingAndTable}
                    >
                        <ArrowBackIosIcon />
                    </IconButton>
                </div>
            )
        }

        {
            switchIcon === false &&(
                <div>
                    <IconButton color="primary" aria-label="setting" component="span" style={{ bottom:'7px', right:'10px' }}
                        onClick={onchangeDisplaySetiingAndTable}
                    >
                        <SettingsIcon />
                    </IconButton>
                </div>
            )
        }

    </div>
    )
}
