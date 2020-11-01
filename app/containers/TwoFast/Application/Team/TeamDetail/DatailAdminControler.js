/* eslint-disable */
import React,{ useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { green } from '@material-ui/core/colors';
import ModalSettingTeamDetail from './ModalSettingTeamDetail'
import AddPeopleTeam from './AddpeopleInTeam/AddPeopleTeam'
import { BiWorld } from 'react-icons/bi';

const useStyles = makeStyles({
    green: {
        color: '#fff',
        backgroundColor: green[500]
    }
  });

export default function DatailAdminControler(props) {
    const classes = useStyles();
    const [dataUser, setDataUser] = useState(props.detailTeam)

    const textNameTeam = {
        color:'#6c757d'
    }
    const textFullWidth = {
        display: 'inline-block',
        width: '100%'
    }
    return (
    <div>
        <h3 style={{ fontWeight:'bold', color:'#6D6B6B' }}>{dataUser.team_name}</h3>
        <h6 style={textNameTeam}> <BiWorld style={{ marginBottom:'3px' }}/> &nbsp;Open team</h6>
        <br />
        <hr />
        <div className="row">
            <div className="col-10">
                <AddPeopleTeam userAlready={props.userAlready}
                    AddError={props.AddError} checkDashboardUserInTeam={props.checkDashboardUserInTeam}
                    AddSuccess={props.AddSuccess} checkListUser={props.checkListUser} 
                    dataToAdd={props.dataToAdd} dataUser={dataUser}
                />
            </div>
            <div className="col-2">
                <ModalSettingTeamDetail test={props.test} dataUser={dataUser} changeDisplaySetiingAndTable={props.changeDisplaySetiingAndTable}/>
            </div>
        </div>
    </div>
    )
}
