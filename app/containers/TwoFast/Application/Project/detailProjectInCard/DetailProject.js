/* eslint-disable */
import React,{useState} from 'react'
import { Tabs } from 'antd';
import DeleteProject from './components/DeleteProject'
import EditProject from './components/EditProject'

const { TabPane } = Tabs;

export default function DetailProject(props) {
    const [dataProject, setDataProject] = useState(props.location.state.detail)
    return (
        <div>
            <h3 style={{ color:'rgb(109, 107, 107)', fontWeight:'bold' }}>{dataProject.project_name}</h3>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Overview" key="1">
                    Overview
                </TabPane>
                <TabPane tab="Job" key="2">
                    Job
                </TabPane>
                <TabPane tab="Milestones" key="3">
                    Milestones
                </TabPane>
                <TabPane tab="Team & People" key="4">
                    Team & People
                </TabPane>
                <TabPane tab="Setting" key="5">
                    <EditProject dataProject={dataProject}/>
                    <hr />
                    <DeleteProject dataProject={dataProject}/>
                </TabPane>
          </Tabs>
        </div>
    )
}
