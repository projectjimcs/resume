import React from 'react';
import ExperienceBlock from './Components/ExperienceComponent.js';

export default class OtherExperience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ExperienceBlock>
        <div className='skill-blocks-container'>
          <span className='sub-heading skill-row'>
            Other Work Experience
          </span>
          
          <span className='skill-row'>
            Annaheim Hotel Bar & Grill / General Manager / Oct 2015 - July 2017
          </span>

          <span className='skill-row'>
            Metro Web Systems Inc. / Web Assistant / August 2013 - October 2015
          </span>
        </div>
      </ExperienceBlock>
    );
  }
}