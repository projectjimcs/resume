import React from 'react';
import ExperienceBlock from './Components/ExperienceComponent.js';

export default class ProjectExperience extends React.Component {
  render() {
    return (
      <ExperienceBlock isLastBlock={true}>
        <div className='skill-blocks-container'>
          <span className='main-heading skill-row'>
            PERSONAL PROJECTS
          </span>

          <div className='row'>
            <div className='experience-row'>
              <span className='sub-heading'>E7 Guild Recorder</span>
              <span className='job-title'>Guild recorder for my guild in the game Epic 7 to record our matches and improve</span>
              <span className='job-title'><a href='https://github.com/projectjimcs/e7guildwarrecorder' rel='noopener noreferrer' target='_blank'>Project Link</a> / Ongoing</span>
            </div>
          </div>

          <div className='row'>
            <div className='experience-row'>
              <span className='sub-heading'>Menomemo</span>
              <span className='job-title'>Scheduler for dental offices to book appointments</span>
              <span className='job-title'><a href='https://github.com/projectjimcs/menomemo-backend' rel='noopener noreferrer' target='_blank'>Project Link Backend</a> / Ongoing</span>
              <span className='job-title'><a href='https://github.com/projectjimcs/menomemo-frontend' rel='noopener noreferrer' target='_blank'>Project Link Backend</a> / Ongoing</span>
            </div>
          </div>
        </div>
      </ExperienceBlock>
    );
  }
}