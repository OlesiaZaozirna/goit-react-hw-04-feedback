import React from 'react';
import css from './FeedbackOptions.module.css'


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button className={css.Btn}
          key={option}
          name={option}
          onClick={() => {
            console.log(`Clicked on ${option} button`);
            onLeaveFeedback(option)
          }}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions
