/* eslint-disable */
import React,{ useState } from 'react'
import { Tabs, Button, Tooltip, Modal , Input, Form, DatePicker, Space ,Radio,
    Select,
    Cascader,
    InputNumber,
    TreeSelect,
    Switch, } from 'antd';
import Expand from 'react-expand-animated';
import { FiChevronDown , FiChevronRight } from "react-icons/fi";
import { makeStyles } from '@material-ui/core/styles';
import Swal from 'sweetalert2'
import axios from 'axios';
import * as api from '../../service/api_project';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({

}));

export default function EditProject(props) {
    const classes = useStyles();
    const history = useHistory();
    const { TextArea } = Input;

    const [project_id, setProject_id] = useState(props.dataProject.project_id)
    const [dataProject, setDataProject] = useState({
        project_desc : props.dataProject.project_desc,
        project_startdate : props.dataProject.project_startdate,
        project_name : props.dataProject.project_name,
        project_enddate :  props.dataProject.project_enddate,
        status_id : 1,
        project_number :  props.dataProject.project_number
    })

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

    const onChangeStart =(value, dateString)=> {
        setDataProject({...dataProject, project_startdate : dateString})
    }
    const onChangeEnd = (value, dateString) => {
        setDataProject({...dataProject, project_enddate : dateString})
    }
    const cleatState = () =>{
        setDataProject(props.dataProject)
        setToggle()
    }
    const EditProject = () => {
        Swal.fire({
            title: 'Edit your project?',
            icon: 'warning',
            text:'Are you sure you want to edit your project?',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#908F8F',
            confirmButtonText: 'Edit Project'
          }).then((result) => {
            if (result.isConfirmed) {
                Edit()
            }
          })
    }

    const Edit = () => {
        const token = localStorage.getItem('token');
        const config = api.EDIT_PROJECT(token, dataProject,project_id);
        axios(config).then((res) => {
            Swal.fire({
                title: 'Edit Success',
                icon:'success',
                timer: 2000,
                onClose: () => {
                    history.push("/app/project/");
                  }
            })
        })
        .catch((err) => {
            Swal.fire({
                title: `Can't edit your project Please edit later`,
                icon:'error',
                timer: 2000
            })
        })
    }
    
    return (
        <div className="row">
            <div className="col-4"  onClick={() => setToggle()}>
                <h5> {icon} Edit project</h5>
            </div>
            <div className="col-8">
                <p style={{ color:'rgb(108, 117, 125)' }}>Make sure your want Edit your project ?</p>

                <Expand open={open} duration={500}>
                    <div style={{ width: '100%', borderRadius:'17px', padding:'10px' }}>
                            <p>You can edit team project anytime !</p>
                            <p>Project name</p>

                            <Input placeholder={dataProject.project_name} onChange={(e) => setDataProject({...dataProject, project_name:e.target.value })} />
                            <br /><br />

                            <p>Project number</p>
                            <Input placeholder={dataProject.project_number}  onChange={(e) => setDataProject({...dataProject, project_number:e.target.value })} />
                            <br /><br />

                            <p>Start date</p>
                                <DatePicker placeholder={dataProject.project_startdate} onChange={onChangeStart} showTime />

                            <br /><br />
                            <p>End date </p>
                                <DatePicker placeholder={dataProject.project_enddate} onChange={onChangeEnd} showTime />
                            <br /><br />

                            <p>Project description</p>
                            <TextArea placeholder={dataProject.project_desc} onChange={(e) => setDataProject({...dataProject, project_desc:e.target.value })} />

                            <br /><br />
                    
                            <br /><br />
                            <div>
                                <Button onClick={() => cleatState()}>Discard</Button>
                                <Button style={{ left:'10px' }} type="primary" onClick={() => EditProject()}>Edit</Button>
                            </div>
                    </div>
                </Expand>
            </div>
        </div> 
    )
}
