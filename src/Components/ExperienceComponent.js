import React from 'react';
import PropTypes from 'prop-types';

export default class ExperienceBlock extends React.Component {
  render() {
    const blockClass = this.props.isLastBlock ? 'last-experience-block' : 'experience-block';

    return (
      <div className={blockClass}>
        {this.props.children}
      </div>
    );
  }
}

ExperienceBlock.propTypes = {
  isLastBlock: PropTypes.bool,
};