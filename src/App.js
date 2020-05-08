import React from 'react';
import './css/app.css'
import ParticleContainer from './ParticleContainer.js'

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
            <div className='experience-block'>
              <span className='sub-heading'>Developer Experience</span>
              <div className='skill-blocks-container'>
                <div className='skill-block'>
                  Javascript
                </div>
                <div className='skill-block'>
                  PHP
                </div>
                <div className='skill-block'>
                  React
                </div>
                <div className='skill-block'>
                  NodeJs
                </div>
              </div>
            </div>
            <div className='experience-block'>
              <span className='sub-heading'>Other Experience</span>
            </div>
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
