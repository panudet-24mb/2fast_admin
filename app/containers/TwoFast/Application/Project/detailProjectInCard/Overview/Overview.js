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

export default function Overview(props) {
    const [user, setUser] = useState()
    const [team, setTeam] = useState()
    const [milestone, setMilestone] = useState()
    const [job, setJob] = useState()
    const [priority, setPriority] = useState([])
    const [status, setStatus] = useState([])

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
                    color="#3cbb25"
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
        <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <div style={{ width:'100%' }}>
                    <ChartDoughnutPriority value={priority}/>
                </div> 
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <div style={{ width:'100%' }}>
                    <ChartDoughnutStatus value={status}/>
                </div>
            </Col>
        </Row>
{/*--- chart ---


job_type*/}
    </>
    )
}