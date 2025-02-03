import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/FeedBack/Feedback';
import Notification from './components/Notification/Notification';

import './App.css';
import { useState } from 'react';

function App() {
  const [feedBackTypes, setFeedBackType] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback =
    feedBackTypes.good + feedBackTypes.neutral + feedBackTypes.bad;

  function updateFeedback(feedbackType) {
    setFeedBackType({
      ...feedBackTypes,
      [feedbackType]: feedBackTypes[feedbackType] + 1,
    });
  }

  return (
    <>
      <Description />
      <Options types={feedBackTypes} handleClick={updateFeedback} />
      {totalFeedback ? (
        <Feedback types={feedBackTypes} />
      ) : (
        <Notification/>
      )}
    </>
  );
}

export default App;
