import React from 'react';
import './styles/About.css';
import {Telegram} from './../hooks/telegram';



function About() {    
  const {user} = Telegram();
  return (
    <div className="container"> 
      <div className="photo">{user?.photo_url}</div>
      <p> Привет, {user?.first_name}</p>
    </div>
  );
}

export default About;