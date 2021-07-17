import React from 'react';

import { Container, Grid, Button } from '@material-ui/core';
import { useParams } from 'react-router';
import YouTube from 'react-youtube';

import LabChoiceDialog from '../components/LabChoiceDialog';

const LabDemo = () => {
  const { labID } = useParams();

  // state for lab choice dialog
  const [labChoiceOpen, setLabChoiceOpen] = React.useState(false);

  const handleVideoEnd = () => {
    console.log('video ended!');
    setLabChoiceOpen(true);
  };

  const handleLabChoiceClose = () => {
    setLabChoiceOpen(false);
  };

  const labMainStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <Container
      component='main'
      maxWidth='md'
      className='main'
      style={labMainStyle}
    >
      <h1>This is lab demo with id {labID}</h1>
      <LabChoiceDialog open={labChoiceOpen} onClose={handleLabChoiceClose} />
      <YouTube videoId={'dQw4w9WgXcQ'} onEnd={handleVideoEnd} />
      <Grid container justify='center' direction='row'>
        <Button variant='contained' color='secondary'>
          Go back a step
        </Button>
        <Button variant='contained'>Restart lab</Button>
      </Grid>
    </Container>
  );
};

export default LabDemo;
