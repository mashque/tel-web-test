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
          <li><Link to="/about"  >ГЛАВНАЯ</Link></li>
          <li><Link to="/events">МЕРОПРИЯТИЯ</Link></li>
        </ul>
      </nav>
      </div>
  );
}

export default Navigation;