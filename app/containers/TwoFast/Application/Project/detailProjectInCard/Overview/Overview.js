/* eslint-disable */
import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import * as api from '../../service/api_project'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from './components/Card'
import count_job from './Animation/count_job.json'
import count_team_in_project from './Animation/count_team_in_project.json'
import count_users_in_projet from './Animation/count_users_in_projet.json'
import count_milestone from './Animation/count_milestone.json'
import ChartDoughnutPriority from './components/ChartDoughnutPriority'
import ChartDoughnutStatus from './components/ChartDoughnutStatus'
import JobNear from './components/JobNear'

export default function Overview(props) {
    const [user, setUser] = useState()
    const [team, setTeam] = useState()
    const [milestone, setMilestone] = useState()
    const [job, setJob] = useState()
    const [priority, setPriority] = useState([])
    const [status, setStatus] = useState([])
    const [jobNear5Day, setJobNear5Day] = useState([])

    // console.log(props.detailProject.project_id);
    // console.log(props.detailProject);

    useEffect(() => {
        checkDashboard()
        return () => {
            
        }
    }, [])

    const checkDashboard = () => {
        const token = localStorage.getItem('token');
        const config = api.GET_DASHBOARD(token, props.detailProject.project_id);
        axios(config).then( res => {
            setJob(res.data.payload.count_job[0].count)
            setTeam(res.data.payload.count_team_in_project[0].count)
            setUser(res.data.payload.count_users_in_projet[0].count)
            setMilestone(res.data.payload.count_milestone[0].count)
            setPriority(res.data.payload.count_by_priority);
            setStatus(res.data.payload.count_by_status)
            setJobNear5Day(res.data.payload.job_enddate_near5day)
        })
        .catch( err => {
            console.log(err);
        })
    }


    return (
    <>
        <Row>
            <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                <Card 
                    value={job}
                    type_count="Job"
                    animation={count_job} 
                    color="#2196f3"
                />
            </Col>
            <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                <Card 
                    value={team}
                    type_count="Team"
                    animation={count_team_in_project} 
                    color="rgb(144, 136, 212)"
                />
            </Col>
            <Col xs={12} sm={12} md={6} lg={3} xl={3}>      
                <Card 
                    value={user}
                    type_count="User"
                    animation={count_users_in_projet} 
                    color="#f79c65"
                />   
            </Col>
            <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                <Card 
                    value={milestone}
                    type_count="Milestone"
                    animation={count_milestone} 
                    color="#fc8476"
                /> 
            </Col>
        </Row>
        <br />
        <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <div style={{ boxShadow:'rgb(158, 158, 158) 0px 0px 5px', margin:'4px', padding:'20px', borderTop:'5px solid rgb(45, 97, 135)' }} >
                    <ChartDoughnutPriority value={priority}/>
                </div> 
                <br />
                <div style={{ boxShadow:'rgb(158, 158, 158) 0px 0px 5px', margin:'4px', padding:'20px', borderTop:'5px solid rgb(224, 82, 151)' }} >
                    <JobNear value={jobNear5Day}/>
                </div>
                <br />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <div style={{ boxShadow:'rgb(158, 158, 158) 0px 0px 5px', margin:'4px', padding:'20px', borderTop:'5px solid rgb(40, 171, 185)' }}>
                    <ChartDoughnutStatus value={status}/>
                </div>
            </Col>
        </Row>
{/*--- chart ---


job_type*/}
    </>
    )
}