import React, { Component } from 'react';
import './App.css';

import TypingTerminal from './Components/TypingTerminal';
import BottomBar from './Components/BottomBar';

class App extends Component {
  render() {
    return (
      <div>
        <TypingTerminal />
        <BottomBar />
      </div>
    );
  }
}

export default App;
