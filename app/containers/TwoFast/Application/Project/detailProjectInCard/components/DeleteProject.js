/* eslint-disable */
import React,{ useState } from 'react'
import Expand from 'react-expand-animated';
import { FiChevronDown , FiChevronRight } from "react-icons/fi";
import { makeStyles } from '@material-ui/core/styles';
import Swal from 'sweetalert2'
import axios from 'axios';
import * as api from '../../service/api_project';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';

const useStyles = makeStyles((theme) => ({

  }));


export default function DeleteProject(props) {
    const classes = useStyles();
    const history = useHistory();
    const [dataProject, setDataProject] = useState(props.dataProject)
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
            title: 'Remove your project?',
            icon: 'warning',
            text:'Are you sure you want to remove your project? if you remove your project, your will permanently lose your project.',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#908F8F',
            confirmButtonText: 'Remove project'
          }).then((result) => {
            if (result.isConfirmed) {
                deleteProject()
            }
          })

    }

    const deleteProject = () => {
        const token = localStorage.getItem('token');
        const config = api.DELETE_PROJECT(token, dataProject.project_id);
        axios(config).then((res) => {
            // Swal.fire({
            //     title: 'Remove Success',
            //     icon:'success',
            //     timer: 2000,
            //     onClose: () => {
            //         history.push("/app/project/");
            //       }
            // })
        })
        .catch( (error) =>{
            if(error.response.status === 404){
                Swal.fire({
                    title: 'Remove Success',
                    icon:'success',
                    timer: 2000,
                    onClose: () => {
                        history.push("/app/project/");
                    }
                })
            } else {
                Swal.fire({
                    title: `Can't remove your project Please remove later`,
                    icon:'error',
                    timer: 2000
                })
            }

        } )
    }


    return (
        <div className="row">
            <div className="col-4"  onClick={() => setToggle()}>
                <h5> {icon} Remove project</h5>
            </div>
            <div className="col-8">
                <p style={{ color:'rgb(108, 117, 125)' }}>Make sure your want Remove your project ?</p>

                <Expand open={open} duration={500}>
                    <div style={{ width: '100%', borderRadius:'17px', padding:'10px' }}>
                            <p style={{ color:'red' }}>Danger !!! this action can't be undo</p>
                            <Button type="primary" danger style={{width:'200px'}} onClick={() => showTest()}>Remove project</Button>
                    </div>
                </Expand>
            </div>
        </div> 
    )
}