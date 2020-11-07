/* eslint-disable */
import React,{ useState , useEffect} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Tabs, Button, Tooltip, Modal , Input, Form, DatePicker, Space ,Radio,
        Checkbox, Select, Cascader, InputNumber, TreeSelect, Switch ,notification } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Swal from 'sweetalert2'
import * as api from '../service/api'

const { Option } = Select;

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
    const [dataMapping, setDataMapping] = useState([])
    const [count, setCount] = useState(0)
    const [userAndTeam, setUserAndTeam] = useState([])
    const [dataJob, setDataJob] = useState({
            job_name :"", 
            job_number : "",
            job_startdate :"",
            job_enddate : "",
            status_id : '',
            priority_id : "",
            job_type_id: '',
    })

    const { Option } = Select;
    // console.log(props.JobType);

    useEffect(() => {
      mappingData()

      return () => {
        
      }
    }, [props.userInProject,props.teamInProject])

    const mappingData = () => {
      setDataMapping(props.userInProject.concat(props.teamInProject))
    }
  
    const onFinishFailed = (errorInfo) => {
  
    };

    const onChangeStart =(value, dateString)=> {
      setDataJob({...dataJob, job_startdate : dateString})
    }
    const onChangeEnd = (value, dateString) => {
      setDataJob({...dataJob, job_enddate : dateString})
    }
    
    function onChangePriority(value) {
      setDataJob({...dataJob, priority_id:value })
    }

    function onChangeJobType(value) {
      setDataJob({...dataJob, job_type_id:value })
    }

    function onChangeStatus(value) {
      setDataJob({...dataJob, status_id:value })
    }

    function handleChangeAssignedTo(value,type) {
      setCount(type.length);
      setUserAndTeam(type)
    }

    const onFinish = () => {
        createNewJob()
    };

    const openNotificationWithIcon = (type,text) => {
      notification[type]({
          message: text,
      });
    };

    function insertTeamHasJob(team_id,job_id,team_name) {
      var data = {
          status_id : 1,
          team_id : team_id,
          is_active : true
      }
      const token = localStorage.getItem('token');
      const config = api.INSERT_TEAM_IN_JOB(token, data, job_id);
      axios(config).then( res => {
       
      })
      .catch( err => {
        openNotificationWithIcon('error',
                <span style={{ position:'relative', top:'4px' }}>Can't insert team 
                <span style={{ color:'#F00' }}> {team_name}</span> Please try again
                </span>
            )
        console.log(err);
      })

    }
    function insertUserHasJob(user_id,job_id, user_name) {
      var data = {
          status_id : 1,
          user_id : user_id,
          is_active : true
      }
      const token = localStorage.getItem('token');
      const config = api.INSERT_USER_IN_JOB(token, data, job_id);
      axios(config).then( res => {
        
      })
      .catch( err => {
        openNotificationWithIcon('error',
                <span style={{ position:'relative', top:'4px' }}>Can't insert user 
                <span style={{ color:'#F00' }}> {user_name}</span> Please try again
                </span>
            )
        console.log(err);
      })

    }

    function createNewJob() {
      const token = localStorage.getItem('token');
      const config = api.CREATE_NEW_JOB(token, dataJob, props.detailProject.project_id);
      axios(config).then( res => {

          if(res.data.payload.job_id){
                userAndTeam.map( data => {
                    if(data.type === "user_id"){
                      insertUserHasJob(data.value, res.data.payload.job_id , data.name);
                    } else if(data.type === "team_id"){
                      insertTeamHasJob(data.value, res.data.payload.job_id , data.name);
                    }
                })
          Swal.fire({
            title: 'Create job Success',
            icon:'success',
            timer: 2000,
            onClose: () => {
              props.closeModal()
              props.listAllJob()
              }
          })
          }

      })
      .catch( err => {
        console.log(err);
        Swal.fire({
          title: 'Error please create again',
          icon:'error',
          timer: 2000,
          onClose: () => {
            props.closeModal()
            }
        })
      })
    }

    return (
    <div>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row>
            <Col sm={6} xs={6} md={6} lg={6}>
                <Form.Item
                  label="Job name"
                  name="jobName"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Job name',
                    },
                  ]}
                >
                    <Input placeholder="Job name" onBlur={(e) => setDataJob({...dataJob, job_name:e.target.value })} />
                </Form.Item>
            </Col>
            <Col sm={6} xs={6} md={6} lg={6}>
                <Form.Item
                  label="Job number"
                  name="JobNumber"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Job number',
                    },
                  ]}
                >
                    <Input placeholder="Job number"  onBlur={(e) => setDataJob({...dataJob, job_number:e.target.value })} />
                </Form.Item>
            </Col>
          </Row>
      {/* ------------- */} 
          <Row>
              <Col sm={6} xs={6} md={6} lg={6}>
                <Form.Item
                    label="Select priority"
                    name="SelectPriority"
                    rules={[
                      {
                        required: true,
                        message: 'Please Select your priority',
                      },
                    ]}
                >
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
                </Form.Item>
              </Col>
              <Col sm={6} xs={6} md={6} lg={6}>
                  <Form.Item
                        label="Select status"
                        name="SelectStatus"
                        rules={[
                          {
                            required: true,
                            message: 'Please Select your status',
                          },
                        ]}
                    >
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
                  </Form.Item>
              </Col>
          </Row>
      
      {/* ------------- */} 
          <Row>
              <Col sm={6} xs={6} md={6} lg={6}>
                  <Form.Item
                        label="Start date"
                        name="StartDate"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your Start date',
                          },
                        ]}
                    >
                      <DatePicker placeholder="Start date" onChange={onChangeStart} showTime />
                  </Form.Item>
              </Col>
              <Col sm={6} xs={6} md={6} lg={6}>
                  <Form.Item
                      label="End date"
                      name="EndDate"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your End date',
                        },
                      ]}
                  >
                      <DatePicker placeholder="End date" onChange={onChangeEnd} showTime />
                  </Form.Item>
              </Col>
          </Row>

          {/* ------------- */} 
          <Row>
              <Col sm={6} xs={6} md={6} lg={6}>
                  <Form.Item
                        label="Job Type"
                        name="JobType"
                        rules={[
                          {
                            required: true,
                            message: 'Please Select your Job Type',
                          },
                        ]}
                    >
                      <Select
                          showSearch
                          style={{ width: 200 }}
                          placeholder="Select Job Type"
                          optionFilterProp="children"
                          onChange={onChangeJobType}
                          filterOption={(input, option) =>
                              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                  }
                      >
                          {
                              props.JobType.map( pt => {
                                  return (
                                      <Option key={pt.job_type_id} value={pt.job_type_id}>{pt.job_type_name}</Option>
                                    )
                                })
                          }
                      </Select>
                  </Form.Item>
              </Col>
              <Col sm={6} xs={6} md={6} lg={6}>
                  <Form.Item
                        label={ <span>Assigned to <span style={{ color:'#52c41a' }}>{count}</span></span> }
                        name="AssignedTo"
                  >
                    <Select
                      mode="multiple"
                      allowClear
                      style={{ width: '100%' }}
                      placeholder="Please select"
                      onChange={handleChangeAssignedTo}
                    >
                     {
                      dataMapping.map( mp => {
                        if(mp.user_username){
                          return <Option key={mp.user_id} type="user_id" name={mp.user_username} value={mp.user_id}> <span style={{ color:'#4dabf5' }}>User</span> {mp.user_username}</Option>
                        } else if(mp.team_name){
                          return <Option key={mp.team_id} type="team_id" name={mp.team_name} value={mp.team_id}> <span style={{ color:'#f79c65' }}>Team</span> {mp.team_name}</Option>
                        }
                      })
                     }
                    </Select>
                  </Form.Item>
              </Col>
          </Row>

      {/* ------------- */} 
            <Row>
            <Col sm={8} xs={8} md={8} lg={8}>
         
            </Col>
                <Col sm={2} xs={2} md={2} lg={2}>
                    <Button onClick={() => props.closeModal()} style={{ width:'100%' }}>Discard</Button>
                </Col>
                <Col sm={2} xs={2} md={2} lg={2}>
                    <Button type="primary" htmlType="submit"
                        style={{width:'100%'}} >Send
                    </Button>
                </Col>
            </Row>
        </Form>
    </div>
    )
}