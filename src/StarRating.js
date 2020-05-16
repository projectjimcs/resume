import React from 'react';
import PropTypes from 'prop-types';
import StarMap from './Maps/StarMap.js';

export default class StarRating extends React.Component {
  render() {
    const {
      starType,
    } = this.props;

    return (
      <div className='star-container'>
          <img className='star-icon' src={StarMap[starType]} />
      </div>
    );
  }
}

StarRating.propTypes = {
  starType: PropTypes.string.isRequired,
};