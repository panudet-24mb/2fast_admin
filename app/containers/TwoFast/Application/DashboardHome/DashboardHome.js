/* eslint-disable */
import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import * as api from './service/api'

export default function DashboardHome() {
    const [dataDashBoard, setDataDashBoard] = useState()
    const [storage, setStorage] = useState()

    function dashboard() {
        const token = localStorage.getItem('token');
        const config = api.GET_DATA_DASHBOARD(token);
        axios(config).then( res => setDataDashBoard(res.data.payload.message))
    }
    function adminDeTail() {
        const token = localStorage.getItem('token');
        const config = api.DETAIL_ADMIN(token);
        axios(config).then( res => checkStorage(res.data.message.company_public_id))
    }
    function checkStorage(company_public_id) {
        const token = localStorage.getItem('token');
        const config = api.CHECK_STORAGE(token, company_public_id);
        axios(config).then( res => setStorage(res.data))
    }

    useEffect(() => {
        dashboard()
        adminDeTail()
        
        return () => {
            
        }
    }, [])
    return (
        <div>
            DashboardHome
            {/*<button onClick={() => console.log(dataDashBoard)}>chek</button>
            <hr />
            JSON.stringify(dataDashBoard)
            <hr />
            JSON.stringify(storage)*/}
        </div>
    )
}
