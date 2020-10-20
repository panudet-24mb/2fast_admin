/* eslint-disable */
import React, { useState } from 'react'
import { Card } from 'antd';
import { Tabs } from 'antd';
import { useHistory } from 'react-router-dom';
import { CheckCircleTwoTone } from '@ant-design/icons';

const { TabPane } = Tabs;

export default function CardProject(props) {
    const history = useHistory();
    const [dataProject, setDataProject] = useState(props.data)

    return (
    <div className="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-6 ant-col-xl-6" 
        onClick={() => history.push({
        pathname: "/app/project/"+dataProject.project_name,
        state: { detail: dataProject }
        })}
    >
        <Card hoverable type="inner" title={<span>{dataProject.project_name} <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: '16px', position:'relative', bottom:'3px' }}  /> </span>} bordered={true} style={{ margin:'20px', width:'90%' }}>
            <Tabs defaultActiveKey="1">
                <TabPane tab="About" key="1">
                    {dataProject.project_desc}
                </TabPane>
                <TabPane tab="Insights" key="2">
                    {dataProject.project_id}
                </TabPane>
            </Tabs>
        </Card>
    </div>
    )
}