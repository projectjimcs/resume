import React from 'react';
import ParticleContainer from './Components/ParticleContainer.js';
import DeveloperExperience from './DeveloperExperience.js';
import WorkExperience from './WorkExperience.js';
import EducationExperience from './EducationExperience.js';
import ProjectExperience from './ProjectExperience.js';
import Character from './Character.js';
import Default from './images/default.png';
import Confident from './images/confident.png';
import Decent from './images/decent.png';
import Learning from './images/learning.png';

import './css/app.scss';
import './css/divider.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.expressionMap = {
      default: {
        image: Default,
        speech: 'Hi, my name is Jim. Thanks for visiting. Please click on the icons to the left to get to know me.',
      },
      confident: {
        image: Confident,
        speech: 'Hey, I use that at my current work!',
      },
      decent: {
        image: Decent,
        speech: 'I know how this works!',
      },
      learning: {
        image: Learning,
        speech: 'I am currently learning this!',
      },
      thanks: {
        image: Default,
        speech: 'Thank you for considering me!',
      }
    };

    this.state = {
      currentExpression: 'default',
      speech: this.expressionMap['default']['speech'],
    };

    this.changeExpression = this.changeExpression.bind(this);
  }

  changeExpression(expression) {
    this.setState({
      currentExpression: expression,
      speech: this.expressionMap[expression]['speech'],
    });
  }

  render() {
    const {
      currentExpression,
      speech,
    } = this.state;

    const expression = this.expressionMap[currentExpression]['image'];

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
