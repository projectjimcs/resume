import React from 'react';
import Particles from 'react-particles-js';

export default class ParticleContainer extends React.Component {
  render() {
    return (
      <div className='particles-background'>
        <Particles
          params={{
            particles: {
              number: {
                value: 90
              },
              size: {
                value: 2.5
              },
              color: {
                value: '#4b4a4a'
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse'
                }
              }
            }
          }} />
      </div>
    );
  }
}