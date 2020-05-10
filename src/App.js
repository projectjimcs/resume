import React from 'react';
import ParticleContainer from './Components/ParticleContainer.js';
import DeveloperExperience from './DeveloperExperience.js';
import WorkExperience from './WorkExperience.js';
import EducationExperience from './EducationExperience.js';
import ProjectExperience from './ProjectExperience.js';

import './css/app.scss';
import './css/divider.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        <div className='main-header'>
          Resume
        </div>
        <div className='main-content'>
      
          <div className='left-side'>
            <DeveloperExperience />
            <b class="hr anim"></b>
            <WorkExperience />
            <b class="hr anim"></b>
            <EducationExperience />
            <b class="hr anim"></b>
            <ProjectExperience />
          </div>

          <div className='right-side'>
            Right Side
          </div>

        </div>
        <ParticleContainer />
      </React.Fragment>
    );
  }
}
