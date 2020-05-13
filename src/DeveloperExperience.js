import React from 'react';
import PropTypes from 'prop-types';
import ExperienceBlock from './Components/ExperienceComponent';

export default class DeveloperExperience extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeExpression = this.handleChangeExpression.bind(this);
  }

  handleChangeExpression(event) {
    const expression = event.target.getAttribute('name');
    this.props.changeExpression(expression);
  }

  render() {
    return (
      <ExperienceBlock>
        <div className='skill-blocks-container developer-icons'>
          <span className='main-heading skill-row'>HOW FAMILIAR ARE YOU WITH...?</span>

          <div className='skill-row'>
            <div className='skill-block'>
              <i
                name='php'
                onClick={this.handleChangeExpression}
                className='devicon-php-plain icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='javascript'
                onClick={this.handleChangeExpression}
                className='devicon-javascript-plain icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='csharp'
                onClick={this.handleChangeExpression}
                className='devicon-csharp-plain-wordmark icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='ruby'
                onClick={this.handleChangeExpression}
                className='devicon-ruby-plain-wordmark icon-colored icon-medium'
              ></i>
            </div>
          </div>

          <div className='skill-row'>
            <div className='skill-block'>
              <i
              name='express'
              onClick={this.handleChangeExpression}
              className='devicon-express-original icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='laravel'
                onClick={this.handleChangeExpression}
                className='devicon-laravel-plain-wordmark icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='codeigniter'
                onClick={this.handleChangeExpression}
                className='devicon-codeigniter-plain-wordmark icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='nodejs'
                onClick={this.handleChangeExpression}
                className='devicon-nodejs-plain-wordmark icon-colored icon-medium'
              ></i>
            </div>
          </div>

          <div className='skill-row'>
            <div className='skill-block'>
              <i
                name='html5'
                onClick={this.handleChangeExpression}
                className='devicon-html5-plain-wordmark icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='css3'
                onClick={this.handleChangeExpression}
                className='devicon-css3-plain-wordmark icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='jquery'
                onClick={this.handleChangeExpression}
                className='devicon-jquery-plain-wordmark icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='reactjs'
                onClick={this.handleChangeExpression}
                className='devicon-react-original-wordmark icon-colored icon-medium'
              ></i>
            </div>
          </div>

          <div className='skill-row'>
            <div className='skill-block'>
              <i
                name='git'
                onClick={this.handleChangeExpression}
                className='devicon-git-plain-wordmark icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='webpack'
                onClick={this.handleChangeExpression}
                className='devicon-webpack-plain-wordmark icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='mysql'
                onClick={this.handleChangeExpression}
                className='devicon-mysql-plain-wordmark icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='postgres'
                onClick={this.handleChangeExpression}
                className='devicon-postgresql-plain icon-colored icon-medium'
              ></i>
            </div>
          </div>
        </div>
      </ExperienceBlock>
    );
  }
}

DeveloperExperience.propTypes = {
  changeExpression: PropTypes.func.isRequired,
};