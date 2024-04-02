import { useState, useEffect } from 'react';

import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification';

function App() {
  const [reviews, setRevies] = useState(() => {
    const savedRevies = window.localStorage.getItem('reviews');
    if (savedRevies !== null) {
      return JSON.parse(savedRevies);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });
  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positive = Math.round((reviews.good / totalFeedback) * 100);

  const updateFeedback = feedbackTyp => {
    setRevies({
      ...reviews,
      [feedbackTyp]: reviews[feedbackTyp] + 1,
    });
  };
  const resetFeedback = () => {
    setRevies({
      ...reviews,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        onUpdate={updateFeedback}
        onReset={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          reviews={reviews}
          totalFeedback={totalFeedback}
          positive={positive}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
