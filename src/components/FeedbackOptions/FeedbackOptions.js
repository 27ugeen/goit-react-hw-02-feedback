import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const items = Object.keys(options);
  return (
    <>
      {items.map(item => (
        <button key={item} type="button" onClick={() => onLeaveFeedback(item)}>
          {item}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
