/* eslint-disable */
import React,{ useEffect , useState } from 'react'
import axios from 'axios'
import * as api from '../service/api_project'
import CardProject from '../CardProject/CardProject'

export default function ProjectActive() {
    const [listProject, setListProject] = useState([])

    const checkListProject = () => {
        const token = localStorage.getItem('token');
        const config = api.GET_ALL_PROJECT(token);
        axios(config)
        .then((res) => {
            if(res.data){
                setListProject(res.data.payload);
            }
        })
        .catch((err) => {
            // console.log(err);
        });
    }

    useEffect(() => {
        checkListProject()
    }, [])

    return (
        <div className="d-flex flex-wrap">
            {
                listProject.map( sentData => {
                    return <CardProject data={sentData}/>
                })
            }
        </div>
    )
}
