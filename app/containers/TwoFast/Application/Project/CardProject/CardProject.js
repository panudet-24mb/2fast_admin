/* eslint-disable */
import React from 'react'
import { Card } from 'antd';
import { Tabs } from 'antd';
import { useHistory } from 'react-router-dom';
import { CheckCircleTwoTone } from '@ant-design/icons';

const { TabPane } = Tabs;

export default function CardProject(props) {
    const history = useHistory();
    return (
    <div className="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-6 ant-col-xl-6" >
        <Card hoverable type="inner" title={<span>{props.data.project_name}
                        <CheckCircleTwoTone twoToneColor="#52c41a" 
                        style={{ fontSize: '16px', position:'relative', bottom:'3px', left:'5px' }}  /> </span>} 
                        bordered={true} style={{ height:'400px', margin:'20px', width:'90%' }}
                        onClick={() => history.push({
                                       pathname: "/app/project/"+props.data.project_name,
                                       state: { detail: props.data }
                                 })}
        >
            <Tabs defaultActiveKey="1">
                <TabPane tab="About" key="1" >
                    <p style={{overflow: "auto" , height:'250px'}}>
                        {props.data.project_desc}
                    </p>
                </TabPane>
                <TabPane tab="Insights" key="2">
                    {props.data.project_id}
                </TabPane>
            </Tabs>
        </Card>
    </div>
    )
}