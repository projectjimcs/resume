import React from 'react';
import ExperienceBlock from './Components/ExperienceComponent';

export default class DeveloperExperience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ExperienceBlock>
        <div className='skill-blocks-container'>
          <span className='sub-heading skill-row'>ARE YOU FAMILIAR WITH...?</span>

          <div className='skill-row'>
            <div className='skill-block'>
              <i className="devicon-php-plain colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-javascript-plain colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-csharp-plain-wordmark colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-ruby-plain-wordmark colored icon-medium"></i>
            </div>
          </div>

          <div className='skill-row'>
            <div className='skill-block'>
              <i className="devicon-express-original colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-laravel-plain-wordmark colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-codeigniter-plain-wordmark colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-nodejs-plain-wordmark colored icon-medium"></i>
            </div>
          </div>

          <div className='skill-row'>
            <div className='skill-block'>
              <i className="devicon-html5-plain-wordmark colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-css3-plain-wordmark colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-jquery-plain-wordmark colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-react-original-wordmark colored icon-medium"></i>
            </div>
          </div>

          <div className='skill-row'>
            <div className='skill-block'>
              <i className="devicon-git-plain-wordmark colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-webpack-plain-wordmark colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-mysql-plain-wordmark colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-postgresql-plain colored icon-medium"></i>
            </div>
          </div>
        </div>
      </ExperienceBlock>
    );
  }
}