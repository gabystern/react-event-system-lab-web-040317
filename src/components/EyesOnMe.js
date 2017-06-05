import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class EyesOnMe extends React.Component {


  focus = () => {
    console.log('Good!');
  }

  blur = () => {
    console.log('Hey! Eyes on me!');
  }

  render () {
    return (
      <button onFocus={this.focus} onBlur={this.blur}/>
    )
  }
}

export default EyesOnMe;
