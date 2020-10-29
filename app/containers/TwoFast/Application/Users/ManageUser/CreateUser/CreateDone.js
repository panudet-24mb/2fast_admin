/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import Fab from '@material-ui/core/Fab';
import Edit from '@material-ui/icons/Edit';
import ArrowBack from '@material-ui/icons/ArrowBack';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const CreateDone = (props) => {
  const { modalStatus, closeModal } = props;
  return (
    <div>
      <Dialog
        open={modalStatus}
        TransitionComponent={Transition}
        keepMounted
        // onClose={closeModal}
        maxWidth="xs"
        fullWidth={true}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div
          style={{
            textAlign: 'center',
            paddingTop: '11px',
            paddingBottom: '4px',
            fontWeight: 'bold',
            fontSize: '21px',
          }}
        >
          User has been created successfully
        </div>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            style={{
              textAlign: 'center',
            }}
          >
            Next Step ...
          </DialogContentText>
        </DialogContent>
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <div
            style={{
              paddingBottom: '20px',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              paddingLeft: '27%',
              paddingRight: '27%',
            }}
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<Edit />}
              style={{ marginBottom: '8px' }}
            >
              Edit user profile
            </Button>

            <Button
              variant="outlined"
              color="primary"
              startIcon={<ArrowBack />}
              onClick={closeModal}
            >
              Back to menu
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

CreateDone.propTypes = {
  closeModal: PropTypes.func,
  modalStatus: PropTypes.bool,
};

export default CreateDone;
