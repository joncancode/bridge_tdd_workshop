import React, { Component } from 'react';

export default class TextInput extends Component {

  handleClick() {
    // e.preventDefault();
    console.log('clicked');
    }

  render() {
    return (
      <div className="unique">
        <h2>this is the test</h2>
        <button onClick={(e)=>this.handleClick(e)}>Click</button>
    </div>
    )
  }
}
