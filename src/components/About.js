import React from 'react';
import './styles/About.css';
import {Telegram} from './../hooks/telegram';



function About() {    
  const {user} = Telegram();
  return (
    <div className="container"> 
      <p> Привет, {user?.username}</p>
    </div>
  );
}

export default About;