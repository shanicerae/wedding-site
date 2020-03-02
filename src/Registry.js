import React from 'react';
import './App.css';

function Registry() {
  return (
    <div>
      <img src="https://i.imgur.com/HkPmbb1.jpg" className="header-image" alt="engagement" />
      <h2 className="content-title center dark-blue">Registry</h2>
      <div className="center dark-blue">View our registries below</div>

      <div className="center registry-button">
        <a href="google.com">Crate & Barrel</a>
      </div>
      <div className="center registry-button">
        <a href="google.com">Hudson's Bay</a>
      </div>
      <div className="center registry-button">
        <a href="google.com">Crate & Barrel</a>
      </div>
    </div>
  );
}

export default Registry;
