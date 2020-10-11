/* eslint-disable */
import React,{ useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { green, pink, deepOrange, deepPurple, blue, teal, lightBlue, 
        amber, brown, grey, blueGrey, purple, indigo } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';

import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import EvStationIcon from '@material-ui/icons/EvStation';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import MoodIcon from '@material-ui/icons/Mood';
import PieChartIcon from '@material-ui/icons/PieChart';
import ToysIcon from '@material-ui/icons/Toys';
import WhatshotIcon from '@material-ui/icons/Whatshot';


const useStyles = makeStyles((theme) => ({
    pink: {
      color: theme.palette.getContrastText(pink[500]),
      backgroundColor: pink[500],
    },
    green: {
        color: '#fff',
        backgroundColor: green[500],
    },
    deepOrange: {
        color: '#fff',
        backgroundColor: deepOrange[500],
      },
    deepPurple: {
        color: '#fff',
        backgroundColor: deepPurple[500],
    },
    blue: {
        color: '#fff',
        backgroundColor: blue[500],
    },
    teal: {
        color: '#fff',
        backgroundColor: teal[500],
    },
    lightBlue: {
        color: '#fff',
        backgroundColor: lightBlue[500],
    },
    amber: {
        color: '#fff',
        backgroundColor: amber[500],
    },
    brown: {
        color: '#fff',
        backgroundColor: brown[500],
    },
    grey: {
        color: '#fff',
        backgroundColor: grey[500],
    },
    blueGrey: {
        color: '#fff',
        backgroundColor: blueGrey[500],
    },
    purple: {
        color: '#fff',
        backgroundColor: purple[500],
    },
    indigo: {
        color: '#fff',
        backgroundColor: indigo[500],
    }
  }));

export default function SelectAvatar() {
    const classes = useStyles();
    const [avatarUser, setAvatarUser] = useState({ avatarIcon:"FolderIcon", colorIcon:"classes.green" })

    return (
        <div>
                <p style={{ color:'#424242', fontSize:'1.7rem' }}>icon</p>
                <div className="row">
               
                    <FolderIcon style={{ fontSize: 30, color: grey[500] }} onClick={() => setAvatarUser({...avatarUser, avatarIcon:"FolderIcon"})} />
                    <PageviewIcon style={{ fontSize: 30, color: grey[500] }} onClick={() => setAvatarUser({...avatarUser, avatarIcon:"PageviewIcon"})} />
                    <AssignmentIcon style={{ fontSize: 30, color: grey[500] }} onClick={() => setAvatarUser({...avatarUser, avatarIcon:"AssignmentIcon"})} />
                    <AccessAlarmsIcon style={{ fontSize: 30, color: grey[500] }} onClick={() => setAvatarUser({...avatarUser, avatarIcon:"AccessAlarmsIcon"})} />
                    <AccountCircleIcon style={{ fontSize: 30, color: grey[500] }} onClick={() => setAvatarUser({...avatarUser, avatarIcon:"AccountCircleIcon"})} />
                    <Brightness4Icon style={{ fontSize: 30, color: grey[500] }} onClick={() => setAvatarUser({...avatarUser, avatarIcon:"Brightness4Icon"})} />
                    <CardTravelIcon style={{ fontSize: 30, color: grey[500] }} onClick={() => setAvatarUser({...avatarUser, avatarIcon:"CardTravelIcon"})} />
                    <EmojiEmotionsIcon style={{ fontSize: 30, color: grey[500] }} onClick={() => setAvatarUser({...avatarUser, avatarIcon:"EmojiEmotionsIcon"})} />
                    <EmojiFoodBeverageIcon style={{ fontSize: 30, color: grey[500] }} onClick={() => setAvatarUser({...avatarUser, avatarIcon:"EmojiFoodBeverageIcon"})} />
                    <EqualizerIcon style={{ fontSize: 30, color: grey[500] }} onClick={() => setAvatarUser({...avatarUser, avatarIcon:"EqualizerIcon"})} />
                    <EvStationIcon style={{ fontSize: 30, color: grey[500] }} onClick={() => setAvatarUser({...avatarUser, avatarIcon:"EvStationIcon"})} />
                    <FlashOnIcon style={{ fontSize: 30, color: grey[500] }} onClick={() => setAvatarUser({...avatarUser, avatarIcon:"FlashOnIcon"})} />
                    <GroupWorkIcon style={{ fontSize: 30, color: grey[500] }} onClick={() => setAvatarUser({...avatarUser, avatarIcon:"GroupWorkIcon"})} />
                    <MoodIcon style={{ fontSize: 30, color: grey[500] }} onClick={() => setAvatarUser({...avatarUser, avatarIcon:"MoodIcon"})} />
                    <PieChartIcon style={{ fontSize: 30, color: grey[500] }} onClick={() => setAvatarUser({...avatarUser, avatarIcon:"PieChartIcon"})} />
                    <ToysIcon style={{ fontSize: 30, color: grey[500] }} onClick={() => setAvatarUser({...avatarUser, avatarIcon:"ToysIcon"})} />
                    <WhatshotIcon style={{ fontSize: 30, color: grey[500] }} onClick={() => setAvatarUser({...avatarUser, avatarIcon:"WhatshotIcon"})} />
                </div>
                <hr />
                <p style={{ color:'#424242',  fontSize:'1.7rem'  }}>color icon</p>
                <div className="row d-flex flex-wrap" >
              
                        <div className={classes.green} style={{width:'40px', height:'40px', borderRadius:'50%'}} 
                            onClick={() => setAvatarUser({...avatarUser, colorIcon:"classes.green"})} />
                        <div className={classes.pink} style={{width:'40px', height:'40px', borderRadius:'50%'}} 
                            onClick={() => setAvatarUser({...avatarUser, colorIcon:"classes.pink"})} />
                        <div className={classes.deepOrange} style={{width:'40px', height:'40px', borderRadius:'50%'}} 
                            onClick={() => setAvatarUser({...avatarUser, colorIcon:"classes.deepOrange"})} />
                        <div className={classes.deepPurple} style={{width:'40px', height:'40px', borderRadius:'50%'}} 
                            onClick={() => setAvatarUser({...avatarUser, colorIcon:"classes.deepPurple"})} />
                        <div className={classes.blue} style={{width:'40px', height:'40px', borderRadius:'50%'}} 
                            onClick={() => setAvatarUser({...avatarUser, colorIcon:"classes.blue"})} />
                        <div className={classes.teal} style={{width:'40px', height:'40px', borderRadius:'50%'}} 
                            onClick={() => setAvatarUser({...avatarUser, colorIcon:"classes.teal"})} />
                        <div className={classes.lightBlue} style={{width:'40px', height:'40px', borderRadius:'50%'}} 
                            onClick={() => setAvatarUser({...avatarUser, colorIcon:"classes.lightBlue"})} />
                        <div className={classes.amber} style={{width:'40px', height:'40px', borderRadius:'50%'}} 
                            onClick={() => setAvatarUser({...avatarUser, colorIcon:"classes.amber"})} />
                        <div className={classes.brown} style={{width:'40px', height:'40px', borderRadius:'50%'}} 
                            onClick={() => setAvatarUser({...avatarUser, colorIcon:"classes.brown"})} />
                        <div className={classes.grey} style={{width:'40px', height:'40px', borderRadius:'50%'}} 
                            onClick={() => setAvatarUser({...avatarUser, colorIcon:"classes.grey"})} />
                        <div className={classes.blueGrey} style={{width:'40px', height:'40px', borderRadius:'50%'}} 
                            onClick={() => setAvatarUser({...avatarUser, colorIcon:"classes.blueGrey"})} />
                        <div className={classes.purple} style={{width:'40px', height:'40px', borderRadius:'50%'}} 
                            onClick={() => setAvatarUser({...avatarUser, colorIcon:"classes.purple"})} />
                        <div className={classes.indigo} style={{width:'40px', height:'40px', borderRadius:'50%'}} 
                            onClick={() => setAvatarUser({...avatarUser, colorIcon:"classes.indigo"})} />
                  
                </div>
            
        </div>
    )
}
