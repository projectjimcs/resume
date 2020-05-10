import React from 'react';
import ExperienceBlock from './Components/ExperienceComponent';

export default class DeveloperExperience extends React.Component {
  render() {
    return (
      <ExperienceBlock>
        <div className='skill-blocks-container developer-icons'>
          <span className='main-heading skill-row'>HOW FAMILIAR ARE YOU WITH...?</span>

          <div className='skill-row'>
            <div className='skill-block'>
              <i className="devicon-php-plain icon-colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-javascript-plain icon-colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-csharp-plain-wordmark icon-colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-ruby-plain-wordmark icon-colored icon-medium"></i>
            </div>
          </div>

          <div className='skill-row'>
            <div className='skill-block'>
              <i className="devicon-express-original icon-colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-laravel-plain-wordmark icon-colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-codeigniter-plain-wordmark icon-colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-nodejs-plain-wordmark icon-colored icon-medium"></i>
            </div>
          </div>

          <div className='skill-row'>
            <div className='skill-block'>
              <i className="devicon-html5-plain-wordmark icon-colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-css3-plain-wordmark icon-colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-jquery-plain-wordmark icon-colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-react-original-wordmark icon-colored icon-medium"></i>
            </div>
          </div>

          <div className='skill-row'>
            <div className='skill-block'>
              <i className="devicon-git-plain-wordmark icon-colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-webpack-plain-wordmark icon-colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-mysql-plain-wordmark icon-colored icon-medium"></i>
            </div>
            <div className='skill-block'>
              <i className="devicon-postgresql-plain icon-colored icon-medium"></i>
            </div>
          </div>
        </div>
      </ExperienceBlock>
    );
  }
}