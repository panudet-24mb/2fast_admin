/* eslint-disable */
import React,{ useState, useEffect } from 'react'
import { Button, Modal, Input  } from 'antd';
import axios from 'axios'
import * as api from '../service/api';
import UserTable from './userTable/UserTable'
import Swal from 'sweetalert2'
import Lottie from 'lottie-react-web'
import { useHistory } from 'react-router-dom';

export default function ManageUser() {
    const history = useHistory();
    const [listUser, setListUser] = useState([])
    const [limitCreateUser, setLimitCreateUser] = useState()
    const [visible, setVisible] = useState(false);
    const [companyPublicID, setCompanyPublicID] = useState(null)
    const [newUser, setNewUser] = useState({ user_username : null, user_password: null})
    localStorage.removeItem("detailProject")
    
    useEffect(() => {
        // async function chekUserList() {
        //     const token = localStorage.getItem('token');
        //     const config = api.GET_LIST_USER(token);
        //     const response = await axios(config)
        //     setListUser(response.data.message)
        //   }  

        //   async function checkDetailAdmin() {
        //     const token = localStorage.getItem('token');
        //     const config = api.CHECK_DETAIL_ADMIN(token);
        //     const response = await axios(config)
        //     if(response.data.message.company_public_id){
        //         setCompanyPublicID(response.data.message.company_public_id)
        //         checkLimitCreateUser(response.data.message.company_public_id)
        //     }
        //   } 

        //   async function checkLimitCreateUser(id) {
        //     const token = localStorage.getItem('token');
        //     const config = api.CHECK_LIMIT_CREATE_USER(token, id);
        //     const response = await axios(config)
        //     setLimitCreateUser(response.data)  
        //   } 
        
          chekUserList();
          checkDetailAdmin()
          
    }, [])

    const chekUserList = ()=> {
        const token = localStorage.getItem('token');
        const config = api.GET_LIST_USER(token);
        axios(config)
        .then(res => setListUser(res.data.message))
        .catch( err => {
            if(err.response.status === 401){
                history.push("/")
                localStorage.removeItem('token')
              } 
        })
      } 

    const checkDetailAdmin = () => {
        const token = localStorage.getItem('token');
        const config = api.CHECK_DETAIL_ADMIN(token);
        axios(config)
        .then(res => {
            if(res.data.message.company_public_id){
                setCompanyPublicID(res.data.message.company_public_id)
                checkLimitCreateUser(res.data.message.company_public_id)
            }
        })
        .catch( err => {
            if(err.response.status === 401){
                history.push("/")
                localStorage.removeItem('token')
              } 
        })
       
      } 

    const checkLimitCreateUser = (id) => {
        const token = localStorage.getItem('token');
        const config = api.CHECK_LIMIT_CREATE_USER(token, id);
        axios(config)
        .then( res => setLimitCreateUser(res.data) )
        .catch( err => {
            if(err.response.status === 401){
                history.push("/")
                localStorage.removeItem('token')
              } 
        })
      } 

    const createNewUser = () =>{
        if(limitCreateUser.current_user_active >= limitCreateUser.user_limit){
            setVisible(false)
            return(
                Swal.fire({
                    title: 'Error',
                    text: `User limit is ${limitCreateUser.current_user_active} / ${limitCreateUser.user_limit}`,
                    icon: 'error'
                  })
            )
        } else {
            setVisible(false)
            const token = localStorage.getItem('token');
            const config = api.CREATE_NEW_USER(token, newUser, companyPublicID);
            axios(config)
            .then( res=> {
                chekUserList();
                checkDetailAdmin()
                Swal.fire({
                    title: 'Create user success',
                    icon:'success',
                    timer: 2000,
                    onClose: () => {
                        setVisible(false)
                    }
                })

            })
            .catch( err => {
                Swal.fire({
                    title: 'Create user error Please try again',
                    icon:'error',
                    timer: 2000,
                    onClose: () => {
                        setVisible(false)
                    }
                })
            })
        }

    }

    const cancleCreateNewUser = () =>{
        setVisible(false)
    }

    const checkData = () => {
        chekUserList();
        checkDetailAdmin()
    }

    return (
    <div>
        <div className="row">
            <div className="col-2">
                <Button type="primary" style={{ width:'100%' }} onClick={() => setVisible(true)}>Create user</Button>
            </div>
        </div>
        <div className="row">
            { 
                limitCreateUser && listUser &&(
                    <div style={{width:'100%'}}>
                        <UserTable listUser={listUser} limitCreateUser={limitCreateUser} checkData={checkData}/>
                    </div>
                )

            }
        </div>

        <Modal
            title="Create new user"
            centered
            footer={null}
            visible={visible}
            // onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            // width={1000}
        >
            <p>Username</p>
            <Input placeholder="Username" onBlur={(e) => setNewUser({...newUser, user_username:e.target.value })} />
            <br /><br />
            <p>Password</p>
            <Input type="password" placeholder="Password" onBlur={(e) => setNewUser({...newUser, user_password:e.target.value })} />
            <br /><br />
            <Button onClick={() => cancleCreateNewUser()}>Discard</Button>
            <Button style={{ left:'10px' }} type="primary" onClick={() =>createNewUser()}>Create</Button>
        </Modal>

    </div>
    )
}

// create user 0 / 5 user
// limit user 5 user
// limit admin 2 admin