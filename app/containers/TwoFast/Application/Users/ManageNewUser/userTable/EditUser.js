/* eslint-disable */
import React,{useState} from 'react'
import { Modal, Button, Input, Form, Checkbox  } from 'antd';
import {
    Chip,
    IconButton
  } from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';
import { SettingOutlined } from '@ant-design/icons';
import * as api from '../../service/api'
import axios from 'axios'
import Swal from 'sweetalert2'

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

export default function EditUser(props) {
    const [detailUser, setDetailUser] = useState(props.value)
    const [visible, setVisible] = useState(false)
    const [addNewDatail, setAddNewDatail] = useState({
      })

    const handleChange = e =>{
        const {name, value} = e.target
        setAddNewDatail({...addNewDatail, [name] : value })
    }

    const clear = () =>{
        setVisible(false)
        // setAddNewDatail({
        //     userdetails_employee_id : detailUser.userdetails_employee_id , 
        //     userdetails_firstname : detailUser.userdetails_firstname , 
        //     userdetails_lastname : detailUser.userdetails_lastname , 
        //     userdetails_phone : detailUser.userdetails_phone , 
        //     userdetails_email : detailUser.userdetails_email , 
        //     userdetails_position : detailUser.userdetails_position
        //   })
    }

    // const createDetailUser = () =>{
    //     console.log(addNewDatail);
    //     const token = localStorage.getItem('token');
    //     const config = api.CREATE_DETAIL_USER(token, addNewDatail , detailUser.user_public_id);
    //     axios(config)
    //     .then( res => sendSuccess() )
    //     .catch( err =>{
    //         console.log(err)
    //         sendError()
    //     })
    // }
    
    const EditDetailUser = () =>{
        
        const token = localStorage.getItem('token');
        const config = api.EDIT_DETAIL_USER(token, addNewDatail , detailUser.user_public_id);
        axios(config)
        .then( res => sendSuccess() )
        .catch( err =>{
            console.log(err)
            sendError()
        })
    }

    const sendSuccess = () => {
        Swal.fire({
            title: 'Edit success',
            icon:'success',
            timer: 2000,
            onClose: () => {
                checkData()
                setVisible(false)
            }
        })
    }

    const sendError = () => {
        Swal.fire({
            title: 'Edit error please try again',
            icon:'error',
            timer: 2000,
            onClose: () => {
                checkData()
                setVisible(false)
            }
        })
    }

    const checkData = () => {
        props.checkData()
    }

    const onFinish = () => {
        EditDetailUser()
      };
    
      const onFinishFailed = errorInfo => {
        console.log(errorInfo);
      };
      
// console.log(detailUser.user_public_id);
    return (
        <div>
            <IconButton onClick={() => setVisible(true)}>
                <SettingOutlined />
            </IconButton>
            <Modal
                title={<h4 style={{ fontWeight:'bold', color:'rgb(108, 117, 125)', marginTop:'20px' }}>Edit username : {`${detailUser.user_username}`}</h4>}
                centered 
                footer={false}
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                // width={1000}
            >

            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Firstname"
                    name="firstname"
                   
                >
                    <Input  placeholder={detailUser.userdetails_firstname} name="userdetails_firstname" onChange={(e) => handleChange(e)} />
                </Form.Item>

                <Form.Item
                    label="Lastname"
                    name="Lastname"
                    
                >
                    <Input placeholder={detailUser.userdetails_lastname} name="userdetails_lastname" onChange={(e) => handleChange(e)}/>
                </Form.Item>

                <Form.Item
                    label="Employee ID"
                    name="EmployeeID"
                    
                >
                    <Input placeholder={detailUser.userdetails_employee_id} name="userdetails_employee_id" onChange={(e) => handleChange(e)}/>
                </Form.Item>

                <Form.Item
                    label="Position"
                    name="position"
                    
                >
                    <Input placeholder={detailUser.userdetails_position} name="userdetails_position" onChange={(e) => handleChange(e)}/>
                </Form.Item>

                <Form.Item
                    label="Phone"
                    name="phone"
                    
                >
                    <Input placeholder={detailUser.userdetails_phone} name="userdetails_phone" onChange={(e) => handleChange(e)}/>
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="Email"
                    
                >
                    <Input placeholder={detailUser.userdetails_email} name="userdetails_email" onChange={(e) => handleChange(e)}/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                <Button onClick={() => clear()}>Discard</Button>
                    <Button style={{ left:'10px' }} type="primary" htmlType="submit" >
                        Edit user
                    </Button>
                </Form.Item>
            </Form>

                {/*<p>Firstname</p>
                <Input placeholder="Firstname" name="userdetails_firstname" onChange={(e) => handleChange(e)} />
                <br /><br />
                <p>Lastname</p>
                <Input placeholder="Lastname" name="userdetails_lastname" onChange={(e) => handleChange(e)} />
                <br /><br />
                <p>Employee ID</p>
                <Input placeholder="Employee ID" name="userdetails_employee_id" onChange={(e) => handleChange(e)} />
                <br /><br />
                <p>Position</p>
                <Input placeholder="Position" name="userdetails_position" onChange={(e) => handleChange(e)} />
                <br /><br />
                <p>Phone</p>
                <Input placeholder="Phone" name="userdetails_phone" onChange={(e) => handleChange(e)} />
                <br /><br />
                <p>E-Mail</p>
                <Input placeholder="E-Mail" name="userdetails_email" onChange={(e) => handleChange(e)} />
                <br /><br />
                <br /><br />


                <div>
                    <Button onClick={() => clear()}>Discard</Button>
                    <Button style={{ left:'10px' }} type="primary" onClick={() => sendUser()}>Create</Button>
                </div>
            */}
            </Modal>

        </div>
    )
}
