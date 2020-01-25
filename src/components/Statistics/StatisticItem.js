import React from 'react';
import PropTypes from 'prop-types';

const StatisticItem = ({ label, value }) => (
  <>
    <li>
      {label}: {value}
    </li>
  </>
);

StatisticItem.propTypes = {
  label: PropTypes.string,
  // value: PropTypes.number,
};

export default StatisticItem;
