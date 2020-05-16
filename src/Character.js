import React from 'react';
import PropTypes from 'prop-types';
import Typewriter from './Typewriter.js';
import StarRating from './StarRating.js';

export default class Character extends React.Component {
  constructor(props) {
    super(props);

    this.maxRating = 5;

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

    const remainingStars = this.maxRating - expressionData.rating;

    const starComponent = [];
    for (let i = 0; i < Math.floor(expressionData.rating); i++) {
      starComponent.push(<StarRating starType='fullStar' />);
    }

    if (expressionData.rating % 1) {
      starComponent.push(<StarRating starType='halfStar' />);
    }

    if (remainingStars > 0.5) {
      for (let j = 0; j < Math.floor(remainingStars); j++) {
        starComponent.push(<StarRating starType='emptyStar' />);
      }
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
          LET'S CHAT!
        </button>
      </div>
    );
  }
}

Character.propTypes = {
  expressionKey: PropTypes.string.isRequired,
  expressionData: PropTypes.object.isRequired,
};