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

export default function DisplayIconAvatar(props) {
    const classes = useStyles();
    const  getAvataricon = (icon)=> {
      switch (icon) {
        case 'FolderIcon':
          return (<FolderIcon />);
          case 'MoodIcon':
            return (<MoodIcon />);
          case 'ToysIcon':
            return (<ToysIcon />);
          case 'PageviewIcon':
            return (<PageviewIcon />);
          case 'WhatshotIcon':
            return (<WhatshotIcon />);
          case 'PieChartIcon':
            return (<PieChartIcon />);
          case 'FlashOnIcon':
            return (<FlashOnIcon />);
          case 'GroupWorkIcon':
            return (<GroupWorkIcon />);
          case 'AccessAlarmsIcon':
            return (<AccessAlarmsIcon />);
          case 'AccountCircleIcon':
            return (<AccountCircleIcon />);
          case 'Brightness4Icon':
            return (<Brightness4Icon />);        
          case 'CardTravelIcon':
            return (<CardTravelIcon />);     
          case 'EmojiEmotionsIcon':
            return (<EmojiEmotionsIcon />);    
          case 'EmojiFoodBeverageIcon':
            return (<EmojiFoodBeverageIcon />);  
          case 'EqualizerIcon':
            return (<EqualizerIcon />);  
          case 'EvStationIcon':
            return (<EvStationIcon />);  
            default:
              return (<AssignmentIcon />);
      }
    }

    const  showAvatarUser = () =>{
        if(props.avatarUser.team_avatar_icon && props.avatarUser.team_avatar_color){
          return(
            <div>
                <Avatar className={ eval(props.avatarUser.team_avatar_color) } style={{ left:'100%' }} >
                  {getAvataricon(props.avatarUser.team_avatar_icon)} 
                </Avatar>
            </div>
          )
        }
    }
    return (
        <div>
            {showAvatarUser()}
        </div>
    )
}
