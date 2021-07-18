import React from 'react';

import { DialogTitle, Dialog, Button } from '@material-ui/core';

const buttonStyle = {
  marginTop: '10px',
};

const LabChoiceDialog = (props) => {
  const { onClose, open } = props;
  return (
    <Dialog onClose={onClose} aria-labelledby='simple-dialog-title' open={open}>
      <DialogTitle id='simple-dialog-title'>
        What do you want to do next?
      </DialogTitle>
      <form>
        <Button
          variant='contained'
          fullWidth
          color='primary'
          style={buttonStyle}
          onClick={props.addAcid()}
        >
          Add acid
        </Button>
        <Button
          variant='contained'
          fullWidth
          color='primary'
          style={buttonStyle}
          onClick={props.addBase()}
        >
          Add base
        </Button>
        <Button
          variant='contained'
          fullWidth
          color='primary'
          style={buttonStyle}
          onClick={props.addWater()}
        >
          Add water
        </Button>
      </form>
    </Dialog>
  );
};

export default LabChoiceDialog;
