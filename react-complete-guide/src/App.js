import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name: 'Nikhil', age: 24},
      { name: 'Stuti', age: 19},
      { name: 'Vaishnavi', age: 24}
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Hi this is Nikhil</h1>
        <button>Switch Name</button>
        <Person name = {this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name = {this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name = {this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I am Nikhil'))
    );
  }
}

export default App;
