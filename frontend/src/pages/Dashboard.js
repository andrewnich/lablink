import React from 'react';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import LabDemoCard from '../components/LabDemoCard';

// temporary videos array
const videos = [
  {
    image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
    title: 'Never Gonna Give You Up!',
  },
  {
    image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
    title: 'Never Gonna Give You Up!',
  },
  {
    image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
    title: 'Never Gonna Give You Up!',
  },
  {
    image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
    title: 'Never Gonna Give You Up!',
  },
];

const videosBox = {
  display: 'flex',
  //width: '90vw',
  //maxWidth: '800px',
  //minWidth: '350px',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  marginBottom: '15px',
};

const Dashboard = () => {
  return (
    <Container component='main' maxWidth='md' className='main'>
      <TextField
        id='outlined-basic'
        label='Search for lab'
        variant='outlined'
        fullWidth
      />
      <div style={videosBox}>
        {videos.map((video) => (
          <LabDemoCard title={video.title} image={video.image} />
        ))}
      </div>
    </Container>
  );
};

export default Dashboard;
