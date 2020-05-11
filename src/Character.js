import React from 'react';
import PropTypes from 'prop-types';
import Happy from './images/happy.png';
import Unhappy from './images/unhappy.png';

export default class Character extends React.Component {
  constructor(props) {
    super(props);

    this.expressionMap = {
      default: Happy,
      happy: Happy,
      unhappy: Unhappy,
    };
  }

  render() {
    const {
      expression,
    } = this.props;
    console.log(this.expressionMap[expression]);
    return (
      <div>
        <img src={this.expressionMap[expression]} />
      </div>
    );
  }
}

Character.propTypes = {
  expression: PropTypes.string.isRequired,
};