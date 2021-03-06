import React, { useEffect } from "react";
import "./App.css";
import { NavLink, useHistory } from "react-router-dom";
import NavIcon from "./NavIcon.svg";
import Monogram from "./images/monogram.png";
import CovidBanner from "./CovidBanner.js";

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
    <div className="header">
      <CovidBanner />
      <div className="backdrop" onClick={closeMobileNav}></div>
      <header className="nav-bar center dark-blue">
        <div className="mobile-nav-icon--bar">
          <img src={Monogram} className="mobile-nav--monogram" alt="J + S" />
          <img
            src={NavIcon}
            className="mobile-nav-icon"
            alt="Open Mobile Navigation Button"
            onClick={openMobileNav}
          />
        </div>
        <div className="main-nav">
          <ul className="nav-bar--link-wrapper">
            <li className="nav-bar-item">
              <NavLink className="dark-blue" to="/info">Schedule of Events</NavLink>
            </li>
            <li className="nav-bar-item">
              <NavLink className="dark-blue" to="/wedding-party">Wedding Party</NavLink>
            </li>
            <li className="nav-bar-item">
              <NavLink className="dark-blue"  to="/" onClick={closeMobileNav}>
                <img src={Monogram} className="nav-bar--monogram" alt="J + S" />
              </NavLink>
            </li>
            <li className="nav-bar-item">
              <NavLink className="dark-blue"  to="/registry">Registry</NavLink>
            </li>
            <li className="nav-bar-item">
              <NavLink className="dark-blue"  to="/rsvp">RSVP</NavLink>
            </li>
          </ul>
        </div>
      </header>
      <div className="mobile-nav">
        <ul>
          <li className="mobile-nav--item">
            <NavLink className="dark-blue"  to="/">Home</NavLink>
          </li>
          <li className="mobile-nav--item">
            <NavLink className="dark-blue"  to="/info">Schedule of Events</NavLink>
          </li>
          <li className="mobile-nav--item">
            <NavLink className="dark-blue" to="/rsvp">RSVP</NavLink>
          </li>
          <li className="mobile-nav--item">
            <NavLink className="dark-blue" to="/wedding-party">Wedding Party</NavLink>
          </li>
          <li className="mobile-nav--item">
            <NavLink className="dark-blue" to="/registry">Registry</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
