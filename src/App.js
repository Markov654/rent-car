import React from 'react';
import './App.css';
import myImage from "./XP1_0006.jpg"
import { Link } from 'react-router-dom';





function App() {
  return (
    <>
      
      <ul>
            <li><Link to= "./">ЗА НАС</Link></li>
            <li><Link to= "./serves">услуги</Link></li>
            <li><Link to= "./contact">КОНТАКТ</Link></li>
        </ul>
     
      <img className = "img" src={myImage} alt='mql mql'></img>
     
    
     
    </>
  );
}

export default App;
