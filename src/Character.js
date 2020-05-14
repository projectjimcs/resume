import React from 'react';
import PropTypes from 'prop-types';
import Typewriter from './Typewriter.js';
import StarRating from './StarRating.js';

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
      expressionData,
    } = this.props;

    const starComponent = [];
    for (let i = 0; i < Math.floor(expressionData.rating); i++) {
      starComponent.push(<StarRating />);
    }

    if (expressionData.rating % 1) {
      starComponent.push(<StarRating isHalfStar={true} />);
    }

    return (
      <div className='character-container'>
        <div className='star-container'>
          {starComponent}
        </div>
        <Typewriter
          key={expressionKey}
          speech={expressionData.speech}
        />
        <div className='character-image'>
          <img src={expressionData.image} />
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
  expressionData: PropTypes.object.isRequired,
};