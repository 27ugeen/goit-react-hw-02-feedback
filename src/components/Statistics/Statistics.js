import React from 'react';
import StatisticItem from './StatisticItem';
import PropTypes from 'prop-types';

const Statistics = props => {
  // const { good, neutral, bad, total, positive } = props;
  const listItems = Object.entries(props);
  return (
    <>
      <ul>
        {listItems.map(item => {
          return (
            <StatisticItem key={item[0]} label={item[0]} value={item[1]} />
          );
        })}
        {/* <StatisticItem label="Good" value={good} />
        <StatisticItem label="Neutral" value={neutral} />
        <StatisticItem label="Bad" value={bad} />
        <StatisticItem label="Total" value={total} />
        <StatisticItem label="Positive feedback" value={`${positive}%`} /> */}
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
