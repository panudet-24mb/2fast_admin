/* eslint-disable */
import React,{ useState } from 'react'
import { Tabs, Button, Tooltip, Modal , Input, Form, DatePicker, Space ,Radio,
    Select,
    Cascader,
    InputNumber,
    TreeSelect,
    Switch, } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Swal from 'sweetalert2'
import * as api from '../service/api'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const useStyles = makeStyles((theme) => ({
    userAction: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    table: {
      '& > div': {
        overflow: 'auto',
      },
      '& table': {
        '& td': {
          wordBreak: 'keep-all',
        },
      },
    },
    textTable : {
      marginTop:'10px'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        borderRadius:'7px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
  }));

export default function CreateNewJob(props) {
    const [dataJob, setDataJob] = useState({
            job_name :"", 
            job_number : "",
            job_startdate :"",
            job_enddate : "",
            status_id : '',
            priority_id : ""
    })

    const { Option } = Select;

    const onChangeStart =(value, dateString)=> {
      setDataJob({...dataJob, job_startdate : dateString})
    }
    const onChangeEnd = (value, dateString) => {
      setDataJob({...dataJob, job_enddate : dateString})
    }

    const close = () => {
      props.closeModal()
    }

    function onChangePriority(value) {
      setDataJob({...dataJob, priority_id:value })
    }

    function onChangeStatus(value) {
      setDataJob({...dataJob, status_id:value })
    }
    
    function createNewJob() {
      const token = localStorage.getItem('token');
      const config = api.CREATE_NEW_JOB(token, dataJob, props.detailProject.project_id);
      axios(config).then( res => {
          Swal.fire({
            title: 'Create job Success',
            icon:'success',
            timer: 2000,
            onClose: () => {
              close()
              props.listAllJob()
              }
          })
      })

    }

    return (
        <div>
            <p>Job name</p>
            <Input placeholder="Job name" onBlur={(e) => setDataJob({...dataJob, job_name:e.target.value })} />
            <br /><br />

            <p>Job number</p>
            <Input placeholder="Job number"  onBlur={(e) => setDataJob({...dataJob, job_number:e.target.value })} />
            <br /><br />

            <p>Start date</p>
            <DatePicker placeholder="Start date" onChange={onChangeStart} showTime />

            <br /><br />
            <p>End date</p>
            <DatePicker placeholder="End date" onChange={onChangeEnd} showTime />
            <br /><br />

            <p>Select priority</p>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select priority"
                optionFilterProp="children"
                onChange={onChangePriority}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
              {
                props.priority.map( pt => {
                  return (
                    <Option key={pt.priority_id} value={pt.priority_id}>{pt.priority_name}</Option>
                  )
                })
              }
              </Select>
              <br /> <br />

              <p>Select status</p>
              <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Select status"
                  optionFilterProp="children"
                  onChange={onChangeStatus}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                {
                  props.status.map( st => {
                    return (
                      <Option key={st.status_id} value={st.status_id}>{st.status_name}</Option>
                    )
                  })
                }
                </Select>
            <br /> <br />
            
            <Button onClick={() => close()} style={{ width:'90px' }}>Discard</Button>
            <Button type="primary" onClick={() => createNewJob()} style={{ marginLeft:'20px' , width:'90px'}} >Send</Button>
        </div>
    )
}
