import React from 'react';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

const Dashboard = () => {
  return (
    <Container component='main' maxWidth='md' className='main'>
      <TextField
        id='outlined-basic'
        label='Search for lab'
        variant='outlined'
        fullWidth
      />
    </Container>
  );
};

export default Dashboard;
