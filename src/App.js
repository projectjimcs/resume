import React from 'react';
import ParticleContainer from './Components/ParticleContainer.js';
import DeveloperExperience from './DeveloperExperience.js';
import OtherExperience from './OtherExperience.js';

import './css/app.css';

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
            <OtherExperience />
            <div className='experience-block'>
              <span className='sub-heading'>Education</span>
            </div>
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
