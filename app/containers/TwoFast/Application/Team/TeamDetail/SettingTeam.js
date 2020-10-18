/* eslint-disable */
import React from 'react'
import { Tabs } from 'antd';
import DeleteTeam from './detailSettingTeam/DeleteTeam'
import RenameTeam from './detailSettingTeam/RenameTeam'
import ChangeAvatar from './detailSettingTeam/ChangeAvatar'

export default function SettingTeam(props) {
    const { TabPane } = Tabs;

    function callback(key) {
    console.log(key);
    }

    return (
        <Tabs onChange={callback} type="card">
            <TabPane tab="Setting" key="1">
                <br />
                <ChangeAvatar detailTeam={props.detailTeam}/>
                <hr />
                <RenameTeam detailTeam={props.detailTeam}/>
                <hr />
                <DeleteTeam detailTeam={props.detailTeam}/>
                <hr />
            </TabPane>
        </Tabs>
    )
}