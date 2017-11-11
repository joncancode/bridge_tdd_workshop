import React, { Component } from 'react';

export default class TextInput extends Component {
  constructor(props){
    super(props)

    this.state={
      statement: "a string"
    }
    
  }
  handleClick() {
    // e.preventDefault();
    console.log('clicked');
    this.setState( {
      statement: "Longer than 10 gets red"
    })
  }

  render() {
    let style = ({
      color: 'red',
    })

    return (
      <div className="main-div">
        <h2 className="heading" style={{color: this.state.statement.length>10 ? "red" : "green"}}>
          {this.state.statement}
        </h2>
        <button onClick={e => this.handleClick(e)}>Click</button>
        <img src="https://i.pinimg.com/originals/c4/dd/5d/c4dd5d671bb86d8551e9697c2d9ece06.gif" />
      </div>
    );
  }
}
