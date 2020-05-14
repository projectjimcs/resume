import React from 'react';
import PropTypes from 'prop-types';

export default class Typewriter extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      typedSpeech: '',
    }

    this.typeSpeech = this.typeSpeech.bind(this);
  }

  componentDidMount() {
    const {
      speech,
    } = this.props;
    
    this.typeSpeech(speech);
  }

  typeSpeech(speech) {
    if (!speech.length) {
      return;
    }

    this.setState((prevState) => {
      return {
        typedSpeech: prevState.typedSpeech.concat(speech[0]),
      }
    })

    setTimeout(() => this.typeSpeech(speech.slice(1)), 30);
  }

  render() {
    const {
      typedSpeech,
    } = this.state;

    return (
      <span className='speech-bubble'>
        {typedSpeech}
      </span>
    );
  }
}

Typewriter.propTypes = {
  speech: PropTypes.string.isRequired,
};