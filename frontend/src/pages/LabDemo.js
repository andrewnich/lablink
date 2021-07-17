import React from 'react';

import { useParams } from 'react-router';

const LabDemo = () => {
  const { labID } = useParams();
  return (
    <div>
      <h1>This is lab demo with id {labID}</h1>
    </div>
  );
};

export default LabDemo;
