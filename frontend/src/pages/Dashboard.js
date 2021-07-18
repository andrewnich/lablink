import React from 'react';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import LabDemoCard from '../components/LabDemoCard';
import NavBar from '../components/NavBar';

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
  const [labs, setLabs] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      // Retrieve dashboard labs from server
      const response = await fetch(
        'http://localhost:8080/dashboard/generatedashboard',
        {
          headers: {
            'Content-type': 'application/json',
          },
          method: 'GET',
        }
      );
      const json = await response.json();
      const currLabs = [];
      for (let i = 0; i < json.labs.length; i += 1) {
        currLabs.push(json.labs[i]);
      }
      //console.log(currLabs);
      setLabs(currLabs);
    };
    fetchData();
  }, []);
  return (
    <div>
      <NavBar />
      <Container component='main' maxWidth='md' className='main'>
        <TextField
          id='outlined-basic'
          label='Search for lab'
          variant='outlined'
          marginBottom='20px'
          fullWidth
        />
        <div style={videosBox}>
          {labs.map((lab) => (
            <LabDemoCard
              title={lab.Name}
              image={`https://img.youtube.com/vi/${lab.Video}/0.jpg`}
              id={lab.Video}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
