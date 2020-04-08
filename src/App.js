import React from 'react';
import './App.css';
import ProgressBar from './progress-bar.component';

function App() {
  return (
    <div className="App">
        <ProgressBar bgcolor={'blue'} completed={40}/>
    </div>
  );
}

export default App;
