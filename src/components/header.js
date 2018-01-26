import React, { Component } from "react";
import { NavLink, withRouter } from 'react-router-dom';
import IBM from '../images/IBM.png'
import "../styles/header.css";

const Header = () => {
  return (
    <div className="menu">
      <div>
        <img src={IBM} alt="IBM" />
      </div>
      <ul className="flex-container">
        <li className="flex-item">
          <NavLink exact to="/home/info-form"
            isActive={(match, location) => {              
              return location.pathname === '/home' ||
                location.pathname === '/home/info-form';
              }
            }
            activeStyle={{
              fontWeight: 'bold',
              color: '#047cc0'
            }}>
            Information
            </NavLink>
        </li>
        <li className="flex-item">
          <NavLink to="/home/skills-form"
            isActive={(match, location) => {
              console.log('match' + match);
              console.log('location' + location);
              return location.pathname === '/home/skills-form';
              }
            }
            activeStyle={{
              fontWeight: 'bold',
              color: '#047cc0'
            }}>
            Skills
            </NavLink>
        </li>
        <li className="flex-item">
          <NavLink to="/home/portfolio-form"
            isActive={(match, location) => {
              console.log('match' + match);
              console.log('location' + location);
              return location.pathname === '/home/portfolio-form';
              }
            }
            activeStyle={{
              fontWeight: 'bold',
              color: '#047cc0'
            }}>
            Portfolio
            </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(Header);