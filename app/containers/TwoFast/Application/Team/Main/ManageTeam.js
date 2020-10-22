/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { ManageTeamStyle } from './ManageTeamStyle';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import * as api from '../../../services/api';

import {
  Grid,
  Dialog,
  Paper,
  Button,
  FormControl,
  InputLabel,
  Input,
  Tooltip,
  Fab,
  Add,
} from '@material-ui/core';
import Swal from 'sweetalert2'
import CardInfo from '../CardInfo/CardInfo';
import SelectAvatar from '../selectTeamIcon/SelectAvatar'
import DisplayIconAvatar from '../selectTeamIcon/DisplayIconAvatar'

const useStyles = ManageTeamStyle;

const ManageTeam = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const { handleSubmit, errors, control } = useForm({
    defaultValues: {
      team_name : "",
      team_avatar_icon : "",
      team_avatar_color : ""
    },
  });

  const [dataTeam, setDataTeam] = useState({
        team_name : "",
        team_avatar_icon : "FolderIcon",
        team_avatar_color : "classes.blue"
  })

  const [newTeam, setNewTeam] = useState(false);
  const [teamData, setTeamData] = useState([]);

  const popNewTeam = () => {
    setNewTeam(true);
  };
  const closeNewteam = () => {
    setNewTeam(false);
    setDataTeam({
        team_name : "",
        team_avatar_icon : "FolderIcon",
        team_avatar_color : "classes.blue"
    })
  };

  const createNewTeamHandler = () => {
    const token = localStorage.getItem('token');
    const config = api.CREATE_NEW_TEAM(token, dataTeam);
    axios(config).then((res) => {
      check()
      setNewTeam(false)
      console.log(res);
    });
  };

  const teamDetailHandler = () => {
    const url = history.location.pathname + '/hey';
    history.push(url);
  };

  const handleChange = (stateValue , newValue) => {
    setDataTeam({...dataTeam, [stateValue] : newValue})
  }
  const check=()=>{
    const token = localStorage.getItem('token');
    const config = api.MANAGE_TEAM_GET_TEAMLIST(token);
    axios(config)
    .then((res) => {
      setTeamData(res.data.message);
    })
    .catch((err) => {
      if(err.response.status === 401){
        history.push("/")
        localStorage.removeItem('token')
      } 
      console.log(err);
    });
  }

  useEffect(() => {
    check()
  }, []);

  const AddNewTeam =()=> (
    <Dialog
      open={newTeam}
      maxWidth="xs"
      fullWidth={true}
      scroll="paper"
      disableScrollLock={false}
      keepMounted
      onClose={closeNewteam}
    >
      <div className={classes.dialogTextHeaderBox}>
        <p className={classes.dialogTextHeader} style={{ color:'#424242' }}>Create New Team</p>
        <br />
      </div>

      <div className={classes.divForm}>
       <form onSubmit={handleSubmit((data) => createNewTeamHandler(data))}>
       <div className="row">

          <div className="col-6">
              <DisplayIconAvatar avatarUser={dataTeam} sizeIcon={50} sizeAvatar={70} styleMarginLeft={95} />
          </div>

          <div className="col-6 mt-2">
            <TextField id="outlined-basic" label="Team name" variant="outlined" 
              onChange={(e) => setDataTeam({...dataTeam, team_name : e.target.value})} style={{ marginRight:'50px' }}/>
          </div>
       </div>
        
          <hr />
        <div style={{width:'80%', marginLeft:'auto', marginRight:'auto'}}>
          <SelectAvatar value={dataTeam} onClick={handleChange}/>
        </div>
          <br />
          <hr />
        
        <div className={classes.actionBox}>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                style={{ marginRight: '10px' }}
              >
                Confirm
              </Button>
              <Button color="primary" variant="outlined" onClick={() => closeNewteam()}>
                Cancel
          </Button>
        </div>
      </form>
    



      {/*
        <form onSubmit={handleSubmit((data) => createNewTeamHandler(data))}>
          <FormControl style={{ width: '70%' }}>
            <InputLabel style={{ fontSize: '13px' }}>Team name</InputLabel>
            <Controller
              as={Input}
              name="team_name"
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: /^[A-Za-z0-9][A-Za-z0-9]*$/i,
                  message: 'invalid type',
                },
              }}
            />
            <div className={classes.teamNameError}>
              {errors.teamname &&
                errors.teamname.type === 'required' &&
                'Team name is required'}
              {errors.teamname &&
                errors.teamname.type === 'pattern' &&
                'invalid type'}
            </div>
          </FormControl>
          <div className={classes.actionBox}>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              style={{ marginRight: '10px' }}
            >
              Confirm
            </Button>
            <Button color="primary" variant="outlined" onClick={closeNewteam}>
              Cancel
            </Button>
          </div>
        </form>
      */}


      </div>
    </Dialog>
  );

  const testData = {
    name: 'puk',
    god: 'naphat',
  };

  return (
    <Switch>
      <Route
        path="/app/manage-team/hey"
        render={() => <DetailEx data={testData} />}
      />
      <Route path="/app/manage-team">
        {AddNewTeam()}
        <Paper
          style={{
            background: '#ababab0d',
          }}
        >
          <div className={classes.headerBox}>
            <div className={classes.divText}>
              <p className={classes.headerText}>Team</p>
            </div>
            {/* <div>
              <Tooltip title="Add New Team" onClick={popNewTeam}>
              <Fab color="secondary" size="small" className={classes.fab}>
                <Add />
              </Fab>
            </Tooltip>
            </div> */}
          </div>
          <CardInfo addnewteam={popNewTeam} data={teamData}/>
        </Paper>
      </Route>
    </Switch>
  );
};

export default ManageTeam;
