import React from 'react';
import logo from './styles/logo.png';
import './styles/Navigation.css';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    
    <div className="header">
      <img src={logo} alt="Logo" className="header_logo"></img>
      <nav className="header_nav">
        <ul className="header_list">
          <li><Link to="/home">Главная</Link></li>
          <li><Link to="/about">Личный кабинет</Link></li>
          <li><Link to="/events">Мероприятия</Link></li>
        </ul>
      </nav>
      </div>
  );
}

export default Navigation;