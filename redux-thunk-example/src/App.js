import React, { Component } from 'react';
import './App.css';
import Subreddit from './components/Subreddit'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Thunk</p>
        <Subreddit/>
      </div>
    );
  }
}

export default App;
