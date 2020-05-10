import React from 'react';
import ExperienceBlock from './Components/ExperienceComponent.js';

export default class ProjectExperience extends React.Component {
  render() {
    return (
      <ExperienceBlock isLastBlock={true}>
        <div className='skill-blocks-container'>
          <span className='main-heading skill-row'>
            Projects
          </span>

          <div className='row'>
            <div className='experience-row'>
              <span className='sub-heading'>Dental Diary</span>
              <span className='job-title'><a href='https://github.com/projectjimcs/dental-diary' rel='noopener noreferrer' target='_blank'>Dental Diary</a> / Ongoing</span>
            </div>
          </div>

          <span className='row'>
            <div className='experience-row'>
              <span className='sub-heading'>Currently Learning</span>
              <span className='job-title'>C# and Unity</span>
            </div>
          </span>
        </div>
      </ExperienceBlock>
    );
  }
}