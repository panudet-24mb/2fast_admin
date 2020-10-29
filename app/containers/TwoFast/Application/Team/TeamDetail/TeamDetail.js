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

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
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
  }));

export default function TeamDetail(props) {
    const [detailTeam, setDetailTeam] = useState(props.location.state.detail)
    const [test, setTest] = useState(false)
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);

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

    useEffect(() => {
        // console.log(detailTeam)
      }, []);
  
    return (
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    <DatailAdminControler test={test} detailTeam={detailTeam} changeDisplaySetiingAndTable={changeDisplaySetiingAndTable}/>
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
                    <Tab label="Member" {...a11yProps(0)} />
                    <Tab label="Status" {...a11yProps(1)} />
                    <Tab label="Subteams" {...a11yProps(2)} />
                    <Tab label="Projects" {...a11yProps(3)} />
                  </Tabs>
                </AppBar>
                <SwipeableViews
                  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                  index={value}
                  onChangeIndex={handleChangeIndex}
                >
                  <TabPanel value={value} index={0} dir={theme.direction}>
                        <DataTableTeamDetailMember />
                  </TabPanel>
                  <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
                  </TabPanel>
                  <TabPanel value={value} index={2} dir={theme.direction}>
                    Item Three
                  </TabPanel>
                  <TabPanel value={value} index={3} dir={theme.direction}>
                    Item Three
                  </TabPanel>
                </SwipeableViews>
                  </div>
                )}

              </div>
                </div>
            </div>
     
    )
}
