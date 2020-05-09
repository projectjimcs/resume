import React from 'react';
import ExperienceBlock from './Components/ExperienceComponent.js';

export default class OtherExperience extends React.Component {
  render() {
    return (
      <ExperienceBlock>
        <div className='skill-blocks-container'>
          <span className='main-heading skill-row'>
            Other Work Experience
          </span>
          
          <div className='row'>
            <div className='experience-row'>
              <span className='sub-heading'>Annaheim Hotel Bar & Grill</span>
              <span className='job-title'>General Manager / Oct 2015 - Jul 2017</span>
            </div>
          </div>

          <span className='row'>
            <div className='experience-row'>
              <span className='sub-heading'>Metro Web Systems Inc.</span>
              <span className='job-title'>Web Assistant / Aug 2013 - Oct 2015</span>
            </div>
          </span>
        </div>
      </ExperienceBlock>
    );
  }
}