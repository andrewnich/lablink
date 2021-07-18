import React from 'react';

import { Container, Grid, Button } from '@material-ui/core';
import { useParams } from 'react-router';
import YouTube from 'react-youtube';

import LabChoiceDialog from '../components/LabChoiceDialog';
import NavBar from '../components/NavBar';

const LabDemo = () => {
  const { labID } = useParams();

  // state for lab choice dialog
  const [labChoiceOpen, setLabChoiceOpen] = React.useState(false);

  const [labData, setLabData] = React.useState({});
  React.useEffect(() => {
    const fetchData = async () => {
      // payload
      // Retrieve lab data from server
      console.log('fetching lab!!!');
      const response = await fetch(
        `http://localhost:8080/lab/selectlab?lab_id=${labID}`,
        {
          headers: {
            'Content-type': 'application/json',
          },
          method: 'GET',
        }
      );
      const json = await response.json();
      const labInfo = json.lab;
      console.log(labInfo);
      //console.log('asdf!!!');
      //setLabData(currLabs);
      setLabData(labInfo);
    };
    fetchData();
  }, []);

  // lab choice options
  const addAcid = () => {
    setLabData({
      id: 'zJjCKzwvUPE',
      Name: 'Adding acid',
    });
  };

  const addBase = () => {
    setLabData({
      id: '_vhSfqeIYwM',
      Name: 'Adding base',
    });
  };

  const addWater = () => {
    setLabData({
      id: '5L16iEb_3RI',
      Name: 'Adding water',
    });
  };

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
    <div>
      <NavBar />
      <Container
        component='main'
        maxWidth='md'
        className='main'
        style={labMainStyle}
      >
        <h1>{labData.Name}</h1>
        <LabChoiceDialog
          open={labChoiceOpen}
          onClose={handleLabChoiceClose}
          addAcid={() => addAcid}
          addWater={() => addWater}
          addBase={() => addBase}
          //options={labData.Start}
        />
        <YouTube videoId={labData.id} onEnd={handleVideoEnd} />
        <Grid container justify='center' direction='row'>
          <Button variant='contained' color='secondary'>
            Go back a step
          </Button>
          <Button variant='contained'>Restart lab</Button>
        </Grid>
      </Container>
    </div>
  );
};

export default LabDemo;
