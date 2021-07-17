import React from 'react';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import LabDemoCard from '../components/LabDemoCard';

// temporary videos array
const videos = [
  {
    id: 0,
    image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
    title: 'Never Gonna Give You Up!',
  },
  {
    id: 1,
    image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
    title: 'Never Gonna Give You Up!',
  },
  {
    id: 2,
    image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
    title: 'Never Gonna Give You Up!',
  },
  {
    id: 3,
    image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
    title: 'Never Gonna Give You Up!',
  },
];

const videosBox = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  marginTop: '20px',
};

const Dashboard = () => {
  return (
    <Container component='main' maxWidth='md' className='main'>
      <TextField
        id='outlined-basic'
        label='Search for lab'
        variant='outlined'
        marginBottom='20px'
        fullWidth
      />
      <div style={videosBox}>
        {videos.map((video) => (
          <LabDemoCard title={video.title} image={video.image} id={video.id} />
        ))}
      </div>
    </Container>
  );
};

export default Dashboard;
