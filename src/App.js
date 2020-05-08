import React from 'react';
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
            <div className='experience-block'>
              <span>Developer Experience</span>
              <div className='skill-blocks-container'>
                <div className='skill-block'>
                  Javascript
                </div>
                <div className='skill-block'>
                  PHP
                </div>
                <div>
                  React
                </div>
              </div>
            </div>
            <div className='experience-block'>
              Other Experience
            </div>
            <div className='experience-block'>
              Education
            </div>
          </div>

          <div className='right-side'>
            Right Side
          </div>

        </div>
      </React.Fragment>
    );
  }
}