import React from 'react';
import './App.css';
import TestFunction from './testFile';
import myImage from "./XP1_0006.jpg"



function App() {
  return (
    <>
      <header className="App">
        
      <h1>Hello react</h1>
      <TestFunction ></TestFunction>
      <img src={myImage} alt='mql mql'></img>
      </header>
     
    </>
  );
}

export default App;
