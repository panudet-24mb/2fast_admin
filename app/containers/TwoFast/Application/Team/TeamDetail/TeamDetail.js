/* eslint-disable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DatailAdminControler from './DatailAdminControler'
import DataTableTeamDetailMember from './dataTableTeam/DataTableTeamDetailMember'
import SettingTeam from './SettingTeam'
import axios from 'axios'
import * as api from '../service/api'
import { Alert, AlertTitle } from '@material-ui/lab';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    localStorage.removeItem("detailProject")
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper
    },
    zIndexAlert : {
      zIndex:'100'
    }
  }));
  
export default function TeamDetail(props) {
    const classes = useStyles();
    const [detailTeam, setDetailTeam] = useState(props.location.state.detail)
    const [test, setTest] = useState(false)
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const [dataToAdd, setDataToAdd] = useState([])
    const [dataToRemove, setDataToRemove] = useState([])

    useEffect(() => {
      checkDashboardUserInTeam()
      checkListUser()

      return () => {
        
      }
    }, [])

    function checkListUser() {

      const token = localStorage.getItem('token');
      const config = api.GET_USER_LIST(token);
      axios(config).then( res=> {
        setDataToAdd(res.data.message);
      })
    }

    const checkDashboardUserInTeam = () =>{

      const token = localStorage.getItem('token');
      const config = api.GET_USER_IN_TEAM_LIST(token,props.location.state.detail.team_id,props.location.state.detail.team_name);
      axios(config).then( res=> {
        setDataToRemove(res.data.team_member)
      })
    }


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const changeDisplaySetiingAndTable = () => {
        if(test === false){
          setTest(true)
        } else{
          setTest(false)
        }
    }

    return (
      <div>
          <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    <DatailAdminControler 
                        checkDashboardUserInTeam={checkDashboardUserInTeam}
                        checkListUser={checkListUser} dataToAdd={dataToAdd} 
                        test={test} detailTeam={detailTeam} changeDisplaySetiingAndTable={changeDisplaySetiingAndTable}
                        />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9">
                      <div className={classes.root}>
                          { test === true &&(
                            <SettingTeam detailTeam={detailTeam}/>
                          )}

                      { test === false &&(
                        <div>
                            <AppBar position="static" color="default">
                                <Tabs
                                  value={value}
                                  onChange={handleChange}
                                  indicatorColor="primary"
                                  textColor="primary"
                                  variant="fullWidth"
                                  aria-label="full width tabs example"
                                >
                                  <Tab label="User" {...a11yProps(0)} />
                                 {/* <Tab label="Status" {...a11yProps(1)} />
                                  <Tab label="Subteams" {...a11yProps(2)} />
                      <Tab label="Projects" {...a11yProps(3)} />*/}
                                </Tabs>
                            </AppBar>
                            <SwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={value}
                                onChangeIndex={handleChangeIndex}
                            >
                                  <TabPanel value={value} index={0} dir={theme.direction}>
                                        <DataTableTeamDetailMember 
                                          checkDashboardUserInTeam={checkDashboardUserInTeam} 
                                          dataToRemove={dataToRemove} dataTeam={props.location.state.detail}
                                        />
                                  </TabPanel>
                    { /*             <TabPanel value={value} index={1} dir={theme.direction}>
                                    Item Two
                                  </TabPanel>
                                  <TabPanel value={value} index={2} dir={theme.direction}>
                                    Item Three
                                  </TabPanel>
                                  <TabPanel value={value} index={3} dir={theme.direction}>
                                    Item Three
                      </TabPanel>*/}
                            </SwipeableViews>
                        </div>
                      )}
                    </div>
                </div>
          </div>

      </div>
     
    )
}
