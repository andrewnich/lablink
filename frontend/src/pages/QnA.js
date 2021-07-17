import React from 'react';

import QuestionScienceInterests from '../components/QuestionScienceInterests';

import QuestionHardHearing from '../components/QuestionHardHearing';

const QnA = () => {
  return (
    <div>
      <QuestionScienceInterests isCurrent={false} />
      <QuestionHardHearing isCurrent={false} />
    </div>
  );
};

export default QnA;
