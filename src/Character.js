import React from 'react';
import PropTypes from 'prop-types';
import Typewriter from './Typewriter.js';

export default class Character extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeExpression = this.handleChangeExpression.bind(this);
  }

  handleChangeExpression(event) {
    const expression = event.target.dataset.expression;
    this.props.changeExpression(expression);
    window.location.href = 'mailto:yjzlin@gmail.com';
  }

  render() {
    const {
      expressionKey,
      expression,
      speech
    } = this.props;

    return (
      <div className='character-container'>
        <Typewriter key={expressionKey} speech={speech} />
        <div className='character-image'>
          <img src={expression} />
        </div>
        <button
          data-expression='thanks'
          className='hire-me-button'
          onClick={this.handleChangeExpression}
        >
          HIRE ME
        </button>
      </div>
    );
  }
}

Character.propTypes = {
  expressionKey: PropTypes.string.isRequired,
  expression: PropTypes.string.isRequired,
  speech: PropTypes.string.isRequired,
};