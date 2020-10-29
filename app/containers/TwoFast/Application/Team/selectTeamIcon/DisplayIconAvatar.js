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
      backgroundColor: pink[500]
    },
    green: {
        color: '#fff',
        backgroundColor: green[500]
    },
    deepOrange: {
        color: '#fff',
        backgroundColor: deepOrange[500]
      },
    deepPurple: {
        color: '#fff',
        backgroundColor: deepPurple[500]
    },
    blue: {
        color: '#fff',
        backgroundColor: blue[500]
    },
    teal: {
        color: '#fff',
        backgroundColor: teal[500]
    },
    lightBlue: {
        color: '#fff',
        backgroundColor: lightBlue[500]
    },
    amber: {
        color: '#fff',
        backgroundColor: amber[500]
    },
    brown: {
        color: '#fff',
        backgroundColor: brown[500]
    },
    grey: {
        color: '#fff',
        backgroundColor: grey[500]
    },
    blueGrey: {
        color: '#fff',
        backgroundColor: blueGrey[500]
    },
    purple: {
        color: '#fff',
        backgroundColor: purple[500]
    },
    indigo: {
        color: '#fff',
        backgroundColor: indigo[500]
    }
  }));

export default function DisplayIconAvatar(props) {
    const classes = useStyles();
    const  getAvataricon = (icon)=> {
      switch (icon) {
        case 'FolderIcon':
          return (<FolderIcon style={{ fontSize: props.sizeIcon }}/>);
          case 'MoodIcon':
            return (<MoodIcon style={{ fontSize: props.sizeIcon }}/>);
          case 'ToysIcon':
            return (<ToysIcon style={{ fontSize: props.sizeIcon }}/>);
          case 'PageviewIcon':
            return (<PageviewIcon style={{ fontSize: props.sizeIcon }}/>);
          case 'WhatshotIcon':
            return (<WhatshotIcon style={{ fontSize: props.sizeIcon }}/>);
          case 'PieChartIcon':
            return (<PieChartIcon style={{ fontSize: props.sizeIcon }}/>);
          case 'FlashOnIcon':
            return (<FlashOnIcon style={{ fontSize: props.sizeIcon }}/>);
          case 'GroupWorkIcon':
            return (<GroupWorkIcon style={{ fontSize: props.sizeIcon }}/>);
          case 'AccessAlarmsIcon':
            return (<AccessAlarmsIcon style={{ fontSize: props.sizeIcon }}/>);
          case 'AccountCircleIcon':
            return (<AccountCircleIcon style={{ fontSize: props.sizeIcon }}/>);
          case 'Brightness4Icon':
            return (<Brightness4Icon style={{ fontSize: props.sizeIcon }}/>);        
          case 'CardTravelIcon':
            return (<CardTravelIcon style={{ fontSize: props.sizeIcon }}/>);     
          case 'EmojiEmotionsIcon':
            return (<EmojiEmotionsIcon style={{ fontSize: props.sizeIcon }}/>);    
          case 'EmojiFoodBeverageIcon':
            return (<EmojiFoodBeverageIcon style={{ fontSize: props.sizeIcon }}/>);  
          case 'EqualizerIcon':
            return (<EqualizerIcon style={{ fontSize: props.sizeIcon }}/>);  
          case 'EvStationIcon':
            return (<EvStationIcon style={{ fontSize: props.sizeIcon }}/>);  
            default:
              return (<AssignmentIcon style={{ fontSize: props.sizeIcon }}/>);
      }
    }
    const  showAvatarUser = () =>{
        if(props.avatarUser.team_avatar_icon && props.avatarUser.team_avatar_color){
          return(
                <Avatar className={ eval(props.avatarUser.team_avatar_color) } style={{ width:props.sizeAvatar+"px", height:props.sizeAvatar+"px"}}>
                  {getAvataricon(props.avatarUser.team_avatar_icon)} 
                </Avatar>
          )
        }
    }
    return (
        <div style={{marginLeft:props.styleMarginLeft+"px"}}>
            {showAvatarUser()}
        </div>
    )
}
