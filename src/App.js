import React from 'react';
import logo from './logo.svg';
import './App.scss';

import MagicEightBall from './MagicEightBall'

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <div className='container' style={{ width: '30%' }}>
          <img src={logo} className="App-logo" alt="logo" />

          <MagicEightBall />
        </div>

      </header>
    </div>
  );
}

export default App;
