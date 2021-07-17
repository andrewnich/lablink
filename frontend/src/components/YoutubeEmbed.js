import React from 'react';
import YouTube from 'react-youtube';

const YoutubeEmbed = (props) => {
  const handleVideoEnd = () => {
    console.log('video ended!');
  };

  return <YouTube videoId={props.youtubeId} onEnd={handleVideoEnd} />;
};

export default YoutubeEmbed;
