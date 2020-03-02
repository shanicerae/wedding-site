import React from 'react';
import './App.css';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="nav-bar center sticky-top dark-blue">
      <p className="header-names">J + S</p>
      <ul>
        <li className="nav-bar-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-bar-item">
          <NavLink to="/info">Day-of Details</NavLink>
        </li>
        <li className="nav-bar-item">
          <NavLink to="/rsvp">RSVP</NavLink>
        </li>
        <li className="nav-bar-item">
          <NavLink to="/vancouver">Vancouver</NavLink>
        </li>
        <li className="nav-bar-item">
          <NavLink to="/registry">Registry</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
