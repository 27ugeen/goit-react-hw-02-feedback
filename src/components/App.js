import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import PropTypes from 'prop-types';

export default class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positive: PropTypes.number,
    countTotalFeedback: PropTypes.func,
    countPositiveFeedbackPercentage: PropTypes.func,
    addFeedback: PropTypes.func,
    updateStatistics: PropTypes.func,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  countTotalFeedback = () => {
    this.setState(({ good, neutral, bad }) => {
      const totalFeedback = Object.values({ good, neutral, bad }).reduce(
        (acc, value) => acc + value,
        0,
      );
      return {
        total: totalFeedback,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        positive: Math.round((prevState.good / prevState.total) * 100),
      };
    });
  };

  addFeedback = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  updateStatistics = type => {
    this.addFeedback(type);
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    const { good, neutral, bad, total, positive } = this.state;

    return (
      <>
        <Section title="Plese leave feedback">
          <FeedbackOptions onLeaveFeedback={this.updateStatistics} />
        </Section>
        <Section title="Statistics">
          {!total ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positive={positive}
            />
          )}
        </Section>
      </>
    );
  }
}
