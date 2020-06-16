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
      <div className="banner">
        <p>
          Out of an abundance of caution for the health and safety of our loved ones,
          we have made the difficult decision to adjust our wedding plans.
          <br></br>
          We will be holding an intimate ceremony with our immediate family and
          wedding party on our original September date.
        </p>
        <p>
          We still want to dance with you all, and so we are looking
          forward to celebrating our marriage with you at our reception on April 30, 2021.
          <br></br>
          Interesting times lead to creative solutions, so we thank you all for your
          understanding.
        </p>
        <p>
         Love, Josué and Shanice
        </p>
      </div>
    </header>
  );
}

export default Header;
