/* eslint-disable */
import React, { useState, useEffect } from 'react';
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
import { makeStyles } from '@material-ui/core/styles';

export default function TeamDetail(props) {
    const [detailTeam, setDetailTeam] = useState(props.location.state.detail)

    useEffect(() => {
        // console.log(detailTeam)
      }, []);
  
    return (
        <div>
            <div className="row">
                <div className="col-11">
                {detailTeam.team_name}
                </div>
                <div className="col-1">
                    <Button
                        color="secondary"
                        variant="contained"
                        style={{ right: '10px' }}
                    >
                        Delete Team
                    </Button>
                </div>
            </div>
        </div>
    )
}
