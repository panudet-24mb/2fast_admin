/* eslint-disable */
import React,{useState} from 'react'
import { Tabs, Button, Tooltip  } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import ProjectActive from './ProjectActive'
import Swal from 'sweetalert2'
import { DatePicker, Space } from 'antd';

const { TabPane } = Tabs;

export default function ListProject() {
    const [test, setTest] = useState('')
    function onChange(date, dateString) {
        console.log(date._d);
      }
      const handleChange = (e) => {
        setTest(e.target.value)
    }

    return (
    <div>
        <div className="row">
            <div className="col">
            <h3 style={{ fontWeight:'bold', color:'rgb(109, 107, 107)' }}>Active Project</h3>
            </div>
            <div className="col">
           { /*<DatePicker onChange={onChange} picker="start date" /> */}
                <Button type="primary" style={{ float:'right',clear:'both' }} >
                    Add Project
                </Button>
            </div>
        </div>
        <div>
            <Tabs defaultActiveKey="1" >
                <TabPane tab="Active" key="1">
                    <ProjectActive />
                </TabPane>
                <TabPane tab="Current" key="2">
                Current
                </TabPane>
            </Tabs>
        </div>
    </div>
    )
}
