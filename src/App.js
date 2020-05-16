import React from 'react';
import ParticleContainer from './Components/ParticleContainer.js';
import DeveloperExperience from './DeveloperExperience.js';
import WorkExperience from './WorkExperience.js';
import EducationExperience from './EducationExperience.js';
import ProjectExperience from './ProjectExperience.js';
import Character from './Character.js';
import ExpressionMap from './Maps/ExpressionMap.js';

import './css/app.scss';
import './css/divider.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.mobileSize = 726;

    this.state = {
      currentExpression: 'default',
      isMobile: false,
    };

    this.changeExpression = this.changeExpression.bind(this);
  }

  componentDidMount() {
    if (window.innerWidth < this.mobileSize) {
      this.setState({
        isMobile: true,
      });
    }
  }

  changeExpression(expression) {
    this.setState({
      currentExpression: expression,
    });
  }

  render() {
    const {
      currentExpression,
      isMobile,
    } = this.state;

    return (
      <React.Fragment>
        {
          isMobile ?
          <div className='main-content mobile-view'>
            <span className='screen-warning'>
              SCREEN SIZE NOT SUPPORTED. PLEASE USE A LARGER SCREEN AND REFRESH. BEST VIEWED ON A NON-MOBILE DEVICES.
            </span>
          </div>
          :
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
                  expressionData={ExpressionMap[currentExpression]}
                  expressionKey={currentExpression}
                />
              </div>
            </div>
            <div className='main-footer'>
              <span><a href="https://www.freepik.com/free-photos-vectors" rel='noopener noreferrer' target='_blank'>Business and star vector created by freepik</a></span>
            </div>
            <ParticleContainer />
          </React.Fragment>
        }
      </React.Fragment>
    );
  }
}
