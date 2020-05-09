import React from 'react';

export default class ExperienceBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='experience-block'>
        {this.props.children}
      </div>
    );
  }
}