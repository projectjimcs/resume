import React from 'react';
import ExperienceBlock from './Components/ExperienceComponent.js';

export default class EducationExperience extends React.Component {
  render() {
    return (
      <ExperienceBlock>
        <div className='skill-blocks-container'>
          <span className='main-heading skill-row'>
            EDUCATION
          </span>

          <span className='row'>
            <div className='experience-row'>
              <span className='sub-heading'>University of British Columbia</span>
              <span className='job-title'>Enrolled in the Integrated Computer Science Program (Second Degree) / Sep 2020 - On hold</span>
            </div>
          </span>

          <div className='row'>
            <div className='experience-row'>
              <span className='sub-heading'>Lighthouse Labs</span>
              <span className='job-title'>Web Development Program / Sep 2018 - Nov 2018</span>
            </div>
          </div>

          <span className='row'>
            <div className='experience-row'>
              <span className='sub-heading'>Simon Fraser University</span>
              <span className='job-title'>Criminology and Psychology Joint Major (BA) / Sep 2009 - Apr 2013</span>
            </div>
          </span>
        </div>
      </ExperienceBlock>
    );
  }
}