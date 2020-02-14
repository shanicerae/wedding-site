import React from 'react';
import './App.css';

function Info() {
  return (
    <div>
      <div className="content-wrapper">
        <h2>Details</h2>

        <h3>Attire</h3>
        <span>Black Tie Optional</span>

        <h3>Colour Palette</h3>
        <span class="colour blush"></span>
        <span class="colour navy"></span>
        <span class="colour baby-blue"></span>
        <span class="colour white"></span>
        <span class="colour green"></span>
      </div>

      <div className="content-wrapper">
        <h2>Ceremony</h2>
        <span>
          St. Paul Parish
          8251 St Albans Rd
          Richmond, BC

          Please arrive by 14:00
        </span>
      </div>

      <div className="content-wrapper">
        <h2>Reception</h2>
        <span>
          Stanley Park Pavilion
          610 Pipeline Rd
          Vancouver, BC

          Cocktail hour begins at 17:00
          Please arrive by 18:30
        </span>
      </div>
    </div>
  );
}

export default Info;
