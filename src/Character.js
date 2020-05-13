import React from 'react';
import PropTypes from 'prop-types';
import Typewriter from './Typewriter.js';

export default class Character extends React.Component {

  render() {
    const {
      expression,
      speech
    } = this.props;

    return (
      <div className='character-container'>
        <Typewriter key={expression} speech={speech} />
        <div className='character-image'>
          <img src={expression} />
        </div>
        <button className='hire-me-button'>HIRE ME</button>
      </div>
    );
  }
}

Character.propTypes = {
  expression: PropTypes.string.isRequired,
  speech: PropTypes.string.isRequired,
};