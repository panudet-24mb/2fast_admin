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
import AddPeopleTeam from './AddPeopleTeam'
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
        <h5 style={textNameTeam}>ทดสอบการสร้างทีม 1234</h5>
        <hr />
        <div className="row">
            <div className="col-10">
                <AddPeopleTeam dataUser={dataUser}/>
            </div>
            <div className="col-2">
                <ModalSettingTeamDetail dataUser={dataUser} changeDisplaySetiingAndTable={props.changeDisplaySetiingAndTable}/>
            </div>
        </div>

            <br />
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        <h3 style={{ fontWeight:'bold', color:'rgb(108, 117, 125)' }}> Member </h3>
                    </Typography>
                    <Typography variant="body2" component="p">
                        <p style={{ color:'#6D6B6B' }}> 1 member </p>
                    </Typography>
                </CardContent>
                <hr style={{ width:'90%', marginLeft:'auto', marginRight:'auto' }}/>
                <CardActions>
                    <div className="row" style={{width:'100%'}}>
                        <div className="col-4">
                            <Avatar className={classes.green} style={{ display:'flex', marginLeft:'auto', marginRight:'auto' }} >
                                PT
                            </Avatar>
                        </div>
                        <div className="col-8">
                            <h6>Pattarapon Tritan</h6>
                            <h6>IT support</h6>
                        </div>
                    </div>
                </CardActions>
            </Card>
    </div>
    )
}
