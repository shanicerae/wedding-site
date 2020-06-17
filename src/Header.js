import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import NavIcon from "./NavIcon.svg";

function Header() {
  function openMobileNav() {
    const mobileNavMenu = document.getElementsByClassName('mobile-nav')[0];

    mobileNavMenu.classList.add('open');
  }

  return (
    <div>
      <header className="nav-bar center sticky-top dark-blue">
        <p className="header-names">J + S</p>
        <div className="mobile-nav-icon--bar">
          <img 
            src={NavIcon}
            className="mobile-nav-icon"
            alt="Open Mobile Navigation Button"
            onClick={openMobileNav}
          />
        </div>
        <div className="main-nav">
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
          <hr className="dark-blue"></hr>
        </div>
      </header>
      <div className="mobile-nav">
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
      </div>
    </div>
  );
}

export default Header;
