import React from 'react';
import ParticleContainer from './Components/ParticleContainer.js';
import DeveloperExperience from './DeveloperExperience.js';
import WorkExperience from './WorkExperience.js';
import EducationExperience from './EducationExperience.js';
import ProjectExperience from './ProjectExperience.js';
import Character from './Character.js';
import ExpressionMap from './ExpressionMap.js';

import './css/app.scss';
import './css/divider.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentExpression: 'default',
      speech: ExpressionMap['default']['speech'],
    };

    this.changeExpression = this.changeExpression.bind(this);
  }

  changeExpression(expression) {
    this.setState({
      currentExpression: expression,
      speech: ExpressionMap[expression]['speech'],
    });
  }

  render() {
    const {
      currentExpression,
      speech,
    } = this.state;

    const expression = ExpressionMap[currentExpression]['image'];

    return (
      <React.Fragment>
        <div className='main-header'>
          <span>JIM LIN</span>
          <span>SOFTWARE DEVELOPER</span>
          <span>CONTACT: <a href="mailto:yjzlin@gmail.com">YJZLIN@GMAIL.COM</a></span>
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
            <Character
              changeExpression={this.changeExpression}
              expressionKey={currentExpression}
              expression={expression}
              speech={speech}
            />
          </div>
        </div>
        <div className='main-footer'>
          <span><a href="https://www.freepik.com/free-photos-vectors/business">Business vector created by freepik - www.freepik.com</a></span>
        </div>
        <ParticleContainer />
      </React.Fragment>
    );
  }
}
