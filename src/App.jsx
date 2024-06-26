import { useState, useEffect } from 'react';

import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

function App() {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = window.localStorage.getItem('reviews');
    if (savedReviews !== null) {
      return JSON.parse(savedReviews);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });
  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positive = Math.round((reviews.good / totalFeedback) * 100);

  const updateFeedback = feedbackTyp => {
    setReviews({
      ...reviews,
      [feedbackTyp]: reviews[feedbackTyp] + 1,
    });
  };
  const resetFeedback = () => {
    setReviews({
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
