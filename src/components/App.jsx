import { useState} from 'react';
import css from './App.module.css';


import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Statistics from './Statistics';

const startFeedbacks = { good: 0, neutral: 0, bad: 0 }

const App = () => {
  const [feedbacks, setFeedbacks] = useState(startFeedbacks);
  const { good, neutral, bad } = feedbacks;

  const handleFeedback = (type) => {
    console.log(`Clicked on ${type} button`);
    setFeedbacks((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const countTotalFeedback = () => bad + good + neutral;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = Object.keys(feedbacks);

  return (
    <div className={css.App__container}>
      <Section title="Your Opinion Matters To Us">
        <p className={css.Description} style={{ fontFamily: 'PencilFont', fontSize: '36px' }}>
          Please leave a little feedback about our service. This will help us improve our service
        </p>
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section>
        {total > 0 ? (
          <Statistics feedbackData={{ ...feedbacks, total, positivePercentage }} />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;


