/* eslint-disable */
import React,{useEffect , useState} from 'react'
import { Tabs, Button, Tooltip, Modal , Input, Form, DatePicker, Space ,Radio,
    Select,
    Cascader,
    InputNumber,
    TreeSelect,
    Switch, } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2'
import moment from 'moment';
import * as api from '../service/api_project'
import axios from 'axios';
import CardProject from '../CardProject/CardProject'
import { useHistory } from 'react-router-dom';
import Lottie from 'lottie-react-web'
import no_project from '../AnimationProject/no_project.json'

export default function ListProject() {
    const history = useHistory();
    const { TabPane } = Tabs
    const { TextArea } = Input;
    const { RangePicker } = DatePicker;
    const [listProject, setListProject] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [dataProject, setDataProject] = useState({
        project_name :"",
        project_desc : "",
        project_startdate :"",
        project_enddate : "",
        status_id : 1,
        project_number : ""
    })
    localStorage.removeItem("detailProject")
    const cleatState = () =>{
        setModalVisible(false)
    }

    
    useEffect(() => {
        checkListProject()
    }, [])

    const checkListProject = () => {
        const token = localStorage.getItem('token');
        const config = api.GET_ALL_PROJECT(token);
        axios(config)
        .then(res => {
            if(res.data){
                setListProject(res.data.payload);
            }
        })
        .catch(err => {
            // console.log(err);
            if(err.response.status === 401){
                history.push("/")
                localStorage.removeItem('token')
              } 
        });
    }
    
    const onChangeStart =(value, dateString)=> {
        setDataProject({...dataProject, project_startdate : dateString})
    }
    const onChangeEnd = (value, dateString) => {
        setDataProject({...dataProject, project_enddate : dateString})
    }
    const createProject = () => {
        const token = localStorage.getItem('token');
        const config = api.CREATE_PROJECT(token, dataProject);
        axios(config)
        .then(res=>{
            setModalVisible(false)
            checkListProject()
        })
        .catch((err) => {
            console.log(err);
        });

    }

    const renderListProject = () => {

        if(listProject.length === 0 ){
            return(
                <div style={{width:'100%'}}>
                    <h1 style={{ textAlign:'center', color:'#6c757d' }}>No Project Create</h1>
                    <h5 style={{ textAlign:'center', color:'#6c757d' }}>Please create your project</h5>
                        <Lottie
                            height={400}
                            options={{
                                    animationData: no_project
                                    }}
                        />
                </div>
            )
        } else {
            return(
                <div className="d-flex flex-wrap">
                                {
                                    listProject.map( (sentData, index) => {
                                        return <CardProject data={sentData} key={index}/>
                                    })
                                }
                            </div>
            )
        }
        
    }


    return (
    <div>

        <div className="row">
            <div className="col">
            <h3 style={{ fontWeight:'bold', color:'rgb(109, 107, 107)' }}>Active Project</h3>
            </div>
            <div className="col">
                <Button type="primary" style={{ float:'right',clear:'both' }} onClick={() => setModalVisible(true)} >
                    Add Project
                </Button>
            </div>
        </div>
        <div>
            <Tabs defaultActiveKey="1" >
                <TabPane tab="Active" key="1">
                    {renderListProject()}
                </TabPane>
                <TabPane tab="Current" key="2">
                    Current
                </TabPane>
            </Tabs>
        </div>

        <Modal
            title="Add new project"
            centered
            footer={null}
            visible={modalVisible}
            // onOk={() => console.log("OK")}
            onCancel={() => setModalVisible(false)}
        >
       <p>Project name</p>
        <Input placeholder="Project name" onBlur={(e) => setDataProject({...dataProject, project_name:e.target.value })} />
        <br /><br />

        <p>Project number</p>
        <Input placeholder="Project number" onBlur={(e) => setDataProject({...dataProject, project_number:e.target.value })} />
        <br /><br />

        <p>Start date</p>
            <DatePicker placeholder="Select Start date"  onChange={onChangeStart} showTime />

        <br /><br />
        <p>End date </p>
            <DatePicker placeholder="Select End date" onChange={onChangeEnd} showTime />
        <br /><br />

        <p>Project description</p>
        <TextArea placeholder="Project description" onBlur={(e) => setDataProject({...dataProject, project_desc:e.target.value })} />

        <br /><br />
  
        <br /><br />
        <div>
            <Button onClick={() => cleatState()}>Discard</Button>
            <Button style={{ left:'10px' }} type="primary" onClick={() => createProject()}>Create</Button>
        </div>

      </Modal>
    </div>
    )
}
