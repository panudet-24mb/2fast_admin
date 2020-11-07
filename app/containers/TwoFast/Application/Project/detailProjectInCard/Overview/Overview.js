/* eslint-disable */
import React,{ useEffect } from 'react'
import axios from 'axios'
import * as api from '../../service/api_project'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Overview(props) {
    console.log(props.detailProject.project_id);
    console.log(props.detailProject);

    useEffect(() => {
        checkDashboard()
        return () => {
            
        }
    }, [])

    const checkDashboard = () => {
        const token = localStorage.getItem('token');
        const config = api.GET_DASHBOARD(token, props.detailProject.project_id);
        axios(config).then( res => {
            console.log(res.data.payload);
        })
        .catch( err => {
            console.log(err);
        })
    }

    return (
    <div>
        <Row>
            <Col sm={3} xs={3} md={3} lg={3}>
                <div style={{ border:'2px solid #2196f3', borderRadius:'7px', height:'150px', boxShadow:'3px 3px 1px #ccc' }}>
                    count_job
                </div>
            </Col>
            <Col sm={3} xs={3} md={3} lg={3}>
                <div style={{ border:'2px solid #2196f3', borderRadius:'7px', height:'150px' }}>
                    count_team_in_project
                </div>
            </Col>
            <Col sm={3} xs={3} md={3} lg={3}>
            count_users_in_projet
            </Col>
            <Col sm={3} xs={3} md={3} lg={3}>
            count_milestone
            </Col>
        </Row>
        


<br /><br /><br /><br /><br /><br /><br /><br />
<div>
--- chart ---
count_by_priority
job_type
</div>
    </div>
    )
}
