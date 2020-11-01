/* eslint-disable */
import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import * as api from './service/api'
import MUIDataTable from 'mui-datatables';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CreateNewJob from './createNewJob/CreateNewJob'
import { Tabs, Button, Tooltip, Modal , Input, Form, DatePicker, Space ,Radio,
    Select,
    Cascader,
    InputNumber,
    TreeSelect,
    Switch, } from 'antd';
import Lottie from 'lottie-react-web'
import noJobCreate from './Animation/noJobCreate.json'
import { RightOutlined } from '@ant-design/icons';

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
  }));

export default function JobList(props) {
    const classes = useStyles();
    const history = useHistory();
    const [visible, setVisible] = useState(false);
    const [checkJob, setCheckJob] = useState([])
    const [job, setJob] = useState()
    const [priority, setPriority] = useState()
    const [status, setStatus] = useState()

    const tableData = [];

    useEffect(() => {
        listAllJob()
        checkPriority()
        checkStatus()
    }, [])

    const listAllJob = () => {
        const token = localStorage.getItem('token');
        const config = api.LIST_JOB_ALL(token);
        axios(config).then( res => {
            mappingData(res.data.payload);
            setCheckJob(res.data.payload)
        }).catch( err => {
            console.log(err);
        })
    }

    const checkPriority = () => {
      const token = localStorage.getItem('token');
      const config = api.CHECK_PRIORITY(token);
      axios(config).then( res => {
          setPriority(res.data.payload.priority);
      }).catch( err => {
          console.log(err);
      })
  }

  const checkStatus = () => {
    const token = localStorage.getItem('token');
    const config = api.CHECK_STATUS(token);
    axios(config).then( res => {
        setStatus(res.data.payload.status);
    }).catch( err => {
        console.log(err);
    })
}

    const mappingData = (data) => {
        data.map((el) => {
            tableData.push([el.job_name, el.job_number, el.job_startdate, el.job_enddate, el]);
          });
          setJob(tableData)
    }

    const closeModal = () =>{
        setVisible(false)
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
            name: 'Name',
            options: {
              filter: true,
              customBodyRender: (value) => {
                return <p className={classes.textTable}>{value}</p>
              },
            },
          },
          {
            name: 'ID job',
            options: {
              filter: true,
              customBodyRender: (value) => {
                return <p className={classes.textTable}>{value}</p>
              },
            },
          },
          {
            name: 'Start',
            options: {
              filter: true,
              customBodyRender: (value) => {
                return <p className={classes.textTable}>{value}</p>
              },
            },
          },
          {
            name: 'End',
            options: {
              filter: true,
              customBodyRender: (value) => {
                return <p className={classes.textTable}>{value}</p>
              },
            },
          },
          {
            name: 'Detail',
            options: {
              filter: true,
              customBodyRender: (value) => {
                return <Button type="primary" shape="round" style={{ borderRadius:'17px' }} 
                              onClick={() =>  
                                history.push({
                                    pathname: "/app/project/"+props.detailProject.project_name+"/"+value.job_name ,
                                    state: value
                        })}>
                            Detail Job </Button>
              },
            },
          },
        ]
      };

     

    return (
    <div>
        <Button type="primary" onClick={() => setVisible(true)} >
          Create new job
        </Button>
  
        {
          checkJob.length !== 0 && (
            <div>
                <br />  <br /> 
                    <MUIDataTable
                        title={
                            <h3 style={{ fontWeight:'bold', color:'#6c757d' }}> Job </h3>
                        }
                        columns={state.columns}
                        data={job}
                        options={options}
                    />
            </div>
          )
        }

        {
          checkJob.length === 0 && (
            <div>
            <br />  <br /> 
            <h1 style={{ textAlign:'center', color:'#6c757d' }}>No Job Create</h1>
            <h5 style={{ textAlign:'center', color:'#6c757d' }}>Please create your Job</h5>
                <Lottie
                    height={400}
                    options={{
                            animationData: noJobCreate
                    }}
                />
            </div>
          )
        }
  

        <Modal
            title="Create new job"
            centered
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            footer={null}    
        >
            <CreateNewJob listAllJob={listAllJob} detailProject={props.detailProject} 
                  priority={priority} status={status} closeModal={closeModal}
            />
        </Modal>

    </div>
    )
}
