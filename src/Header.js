import React, { useEffect } from "react";
import "./App.css";
import { NavLink, useHistory } from "react-router-dom";
import NavIcon from "./NavIcon.svg";
import Monogram from "./images/monogram.png";

function Header() {
  const history = useHistory();

  useEffect(() => {
    return history.listen(() => {
      closeMobileNav();
    });
  }, [history]);

  function openMobileNav() {
    const mobileNavMenu = document.getElementsByClassName("mobile-nav")[0];
    const backdrop = document.getElementsByClassName("backdrop")[0];

    mobileNavMenu.classList.add("open");
    backdrop.classList.add("open");
  }

  function closeMobileNav() {
    const mobileNavMenu = document.getElementsByClassName("mobile-nav")[0];
    const backdrop = document.getElementsByClassName("backdrop")[0];

    mobileNavMenu.classList.remove("open");
    backdrop.classList.remove("open");
  }

  return (
    <div>
      <div className="backdrop" onClick={closeMobileNav}></div>
      <header className="nav-bar center dark-blue">
        <img src={Monogram} className="nav-bar--monogram" alt="J + S" />
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
              <NavLink to="/" onClick={closeMobileNav}>
                Home
              </NavLink>
            </li>
            <li className="nav-bar-item">
              <NavLink to="/info">Schedule of Events</NavLink>
            </li>
            <li className="nav-bar-item">
              <NavLink to="/rsvp">RSVP</NavLink>
            </li>
            <li className="nav-bar-item">
              <NavLink to="/vancouver">Wedding Party</NavLink>
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
          <li className="mobile-nav--item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mobile-nav--item">
            <NavLink to="/info">Schedule of Events</NavLink>
          </li>
          <li className="mobile-nav--item">
            <NavLink to="/rsvp">RSVP</NavLink>
          </li>
          <li className="mobile-nav--item">
            <NavLink to="/vancouver">WeddingParty</NavLink>
          </li>
          <li className="mobile-nav--item">
            <NavLink to="/registry">Registry</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
