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
    const { good, neutral, bad } = this.state;
    return Object.values({ good, neutral, bad }).reduce(
      (acc, value) => acc + value,
      0,
    );
  };

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  addFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  updateStatistics = type => {
    this.addFeedback(type);
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Plese leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.updateStatistics}
          />
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
