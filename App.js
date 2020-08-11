import React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    paragraphs: ['Default paragraph 1', 'Default paragraph 2']
  }

  newParagraphHandler = () => {
    this.setState({
      paragraphs: ['Changed paragraph 1', 'Changed paragraph 2']
    });
  }

  render() {
    return (
      <div>
        <UserOutput parag={this.state.paragraphs} />
        <button onClick={this.newParagraphHandler} >Change paragraph</button>
        <UserOutput parag={this.state.paragraphs} />
      </div>
    )
  }
}

export default App;
