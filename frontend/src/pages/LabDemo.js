import React from 'react';

import Container from '@material-ui/core/Container';
import { useParams } from 'react-router';
import YoutubeEmbed from '../components/YoutubeEmbed';

const LabDemo = () => {
  const { labID } = useParams();
  return (
    <Container component='main' maxWidth='md' className='main'>
      <h1>This is lab demo with id {labID}</h1>
      <YoutubeEmbed youtubeId='dQw4w9WgXcQ' />
    </Container>
  );
};

export default LabDemo;
