import React from 'react';
import ExperienceBlock from './Components/ExperienceComponent.js';

export default class WorkExperience extends React.Component {
  render() {
    return (
      <ExperienceBlock>
        <div className='skill-blocks-container'>
          <span className='main-heading skill-row'>
            WORK EXPERIENCE
          </span>
          <div className='row'>
            <div className='experience-row'>
              <span className='sub-heading'>Push Operations</span>
              <span className='job-title'>Junior Software Developer / Dec 2018 - Present</span>
              <span className='job-title'>Account Administrator / Nov 2017 - Sep 2018</span>
            </div>
          </div>

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