import React from 'react';
import StatisticItem from './StatisticItem';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <>
      <ul>
        <StatisticItem label="Good" value={good} />
        <StatisticItem label="Neutral" value={neutral} />
        <StatisticItem label="Bad" value={bad} />
        <StatisticItem label="Total" value={total} />
        <StatisticItem label="Positive feedback" value={`${positive}%`} />
      </ul>
    </>
  );
};

Statistics.defaultProps = {
  total: 0,
  positive: 0,
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
};

export default Statistics;
