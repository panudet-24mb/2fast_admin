/* eslint-disable */
import React,{useState} from 'react'
import { Tabs } from 'antd';
import DeleteProject from './components/DeleteProject'
import EditProject from './components/EditProject'
import JobList from '../../Job/JobList'
import AddTeamAndUserInProject from './AddTeamAndUserInProject/AddTeamAndUserInProject'
import Overview from './Overview/Overview'

const { TabPane } = Tabs;

export default function DetailProject() {
    const detailProject = JSON.parse(localStorage.getItem('detailProject'));

    return (
        <div>
            <h3 style={{ color:'rgb(109, 107, 107)', fontWeight:'bold' }}>{detailProject.project_name}</h3>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Overview" key="1">
                    <Overview detailProject={detailProject}/>
                </TabPane>
                <TabPane tab="Job" key="2">
                    <JobList detailProject={detailProject} />
                </TabPane>
                <TabPane tab="Milestones" key="3">
                    Milestones
                </TabPane>
                <TabPane tab="Team & People" key="4">
                    <AddTeamAndUserInProject detailProject={detailProject}/>
                </TabPane>
                <TabPane tab="Setting" key="5">
                    <EditProject dataProject={detailProject}/>
                    <hr />
                    <DeleteProject dataProject={detailProject}/>
                </TabPane>
          </Tabs>
        </div>
    )
}

// localStorage.setItem('detailProject', JSON.stringify(props.location.state.detail))
// const detailProject = JSON.parse(localStorage.getItem('detailProject'));
// console.log(detailProject);