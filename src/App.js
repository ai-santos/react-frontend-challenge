import React, { Component } from 'react';
import UserCards from './components/UserData/UserCards.js';
import './components/styles/UserCards.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserCards/>
      </div>
    );
  }
}

export default App;