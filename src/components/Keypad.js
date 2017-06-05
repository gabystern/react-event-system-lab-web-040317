import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Keypad extends React.Component {

  enter = () => {
    console.log('Entering password...');
  }

  render () {
    return (
      <input type="password" onKeyUp={this.enter}/>
    )
  }
}

export default Keypad;
