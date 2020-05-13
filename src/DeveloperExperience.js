import React from 'react';
import PropTypes from 'prop-types';
import ExperienceBlock from './Components/ExperienceComponent';

export default class DeveloperExperience extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeExpression = this.handleChangeExpression.bind(this);
  }

  handleChangeExpression(event) {
    const expression = event.target.dataset.expression;
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
                data-expression='confident'
                onClick={this.handleChangeExpression}
                className='devicon-php-plain icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='javascript'
                data-expression='confident'
                onClick={this.handleChangeExpression}
                className='devicon-javascript-plain icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='csharp'
                data-expression='learning'
                onClick={this.handleChangeExpression}
                className='devicon-csharp-plain-wordmark icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='ruby'
                data-expression='decent'
                onClick={this.handleChangeExpression}
                className='devicon-ruby-plain-wordmark icon-colored icon-medium'
              ></i>
            </div>
          </div>

          <div className='skill-row'>
            <div className='skill-block'>
              <i
              name='express'
              data-expression='confident'
              onClick={this.handleChangeExpression}
              className='devicon-express-original icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='laravel'
                data-expression='confident'
                onClick={this.handleChangeExpression}
                className='devicon-laravel-plain-wordmark icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='codeigniter'
                data-expression='confident'
                onClick={this.handleChangeExpression}
                className='devicon-codeigniter-plain-wordmark icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='nodejs'
                data-expression='confident'
                onClick={this.handleChangeExpression}
                className='devicon-nodejs-plain-wordmark icon-colored icon-medium'
              ></i>
            </div>
          </div>

          <div className='skill-row'>
            <div className='skill-block'>
              <i
                name='html5'
                data-expression='confident'
                onClick={this.handleChangeExpression}
                className='devicon-html5-plain-wordmark icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='css3'
                data-expression='confident'
                onClick={this.handleChangeExpression}
                className='devicon-css3-plain-wordmark icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='jquery'
                data-expression='confident'
                onClick={this.handleChangeExpression}
                className='devicon-jquery-plain-wordmark icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='reactjs'
                data-expression='confident'
                onClick={this.handleChangeExpression}
                className='devicon-react-original-wordmark icon-colored icon-medium'
              ></i>
            </div>
          </div>

          <div className='skill-row'>
            <div className='skill-block'>
              <i
                name='git'
                data-expression='decent'
                onClick={this.handleChangeExpression}
                className='devicon-git-plain-wordmark icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='webpack'
                data-expression='decent'
                onClick={this.handleChangeExpression}
                className='devicon-webpack-plain-wordmark icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='mysql'
                data-expression='decent'
                onClick={this.handleChangeExpression}
                className='devicon-mysql-plain-wordmark icon-colored icon-medium'
              ></i>
            </div>
            <div className='skill-block'>
              <i
                name='postgre'
                data-expression='decent'
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