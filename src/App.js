import React, { Component } from 'react';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Users title="Users List"/>
      </div>
    );
  }
}

export default App;
