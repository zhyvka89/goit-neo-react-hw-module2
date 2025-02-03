import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/FeedBack/Feedback';

import './App.css'
import { useState } from 'react';

function App() {
  const [feedBackTypes, setFeedBackType] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  function updateFeedback(feedbackType) {
    setFeedBackType({
      ...feedBackTypes,
      [feedbackType]: feedBackTypes[feedbackType] + 1
    })
  }

  return (
    <>
      <Description/>
      <Options types={feedBackTypes} handleClick={updateFeedback}/>
      <Feedback types={feedBackTypes}/>
    </>
  )
}

export default App
