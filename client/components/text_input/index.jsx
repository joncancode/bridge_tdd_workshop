import React, { Component } from 'react';

export default class TextInput extends Component {
  handleClick() {
    // e.preventDefault();
    console.log('clicked');
  }

  render() {
    
    let style = ({
      color: 'red',
    })

    let statement = "this is a test"

    return (
      <div className="unique">
        <h2 className="heading" style={{color: statement.length>10 ? "red" : "green"}}>
          {statement}
        </h2>

        <button onClick={e => this.handleClick(e)}>Click</button>
      </div>
    );
  }
}
