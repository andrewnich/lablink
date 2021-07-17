import React from 'react';

const YoutubeEmbed = (props) => {
  return (
    <div>
      <iframe
        width='853'
        height='480'
        src={`https://www.youtube.com/embed/${props.youtubeId}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </div>
  );
};

export default YoutubeEmbed;
