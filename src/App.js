import React from 'react';
import ParticleContainer from './Components/ParticleContainer.js';
import DeveloperExperience from './DeveloperExperience.js';
import WorkExperience from './WorkExperience.js';
import EducationExperience from './EducationExperience.js';
import ProjectExperience from './ProjectExperience.js';
import Character from './Character.js';

import './css/app.scss';
import './css/divider.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentExpression: 'default',
    };

    this.changeExpression = this.changeExpression.bind(this);
  }

  changeExpression(expression) {
    this.setState({
      currentExpression: expression,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className='main-header'>
          <span>JIM LIN</span>
          <span>SOFTWARE DEVELOPER</span>
          <span>CONTACT ME: YJZLIN@GMAIL.COM</span>
        </div>
        <div className='main-content'>
      
          <div className='left-side'>
            <DeveloperExperience changeExpression={this.changeExpression} />
            <b className="hr anim"></b>
            <WorkExperience />
            <b className="hr anim"></b>
            <EducationExperience />
            <b className="hr anim"></b>
            <ProjectExperience />
          </div>

          <div className='right-side'>
            <Character expression={this.state.currentExpression} />
          </div>

        </div>
        <ParticleContainer />
      </React.Fragment>
    );
  }
}
