import React from 'react';
import PropTypes from 'prop-types';
import Star from './images/star.png';

export default class StarRating extends React.Component {
  render() {
    const starClass = this.props.isHalfStar ? 'half-star' : '';

    return (
      <div className='star-container'>
        <div className={starClass}>
          <img className='star-icon' src={Star} />
        </div>
      </div>
    );
  }
}

StarRating.propTypes = {
  isHalfStar: PropTypes.bool,
};