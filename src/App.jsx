import { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/FeedBack/Feedback';
import Notification from './components/Notification/Notification';

import { center } from './App.module.css';

function App() {
  const [feedBackTypes, setFeedBackType] = useState(() => {
    const feedbackData = localStorage.getItem('feedbacks')

    if (feedbackData) return JSON.parse(feedbackData);

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  });

  useEffect(() => {
    localStorage.setItem('feedbacks', JSON.stringify(feedBackTypes))
  }, [feedBackTypes])

  const totalFeedback =
    feedBackTypes.good + feedBackTypes.neutral + feedBackTypes.bad;

  const positiveFeedback = Math.round(
    (feedBackTypes.good / totalFeedback) * 100
  );

  function onUpdateFeedback(feedbackType) {
    setFeedBackType({
      ...feedBackTypes,
      [feedbackType]: feedBackTypes[feedbackType] + 1,
    });
  }
  function onResetClick() {
    setFeedBackType({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <div className={center}>
      <Description />
      <Options
        types={feedBackTypes}
        handleFeedbackClick={onUpdateFeedback}
        totalFeedback={totalFeedback}
        handleResetClick={onResetClick}
      />
      {totalFeedback ? (
        <Feedback
          types={feedBackTypes}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
