import React from "react";
import "./App.css";

function Info() {
  return (
    <div>
      {/* <img src="https://i.imgur.com/HkPmbb1.jpg" className="header-image" alt="engagement" /> */}

      <div className="content-wrapper">
        <h2 className="content-title">Ceremony</h2>
        <div>
          St. Paul Parish
          <br />
          8251 St Albans Rd
          <br />
          Richmond, BC
          <br />
          <a
            href="https://goo.gl/maps/xevpSgN22WfEHU7G9"
            className="directions-link"
          >
            Get Directions
          </a>
          <br />
          <br />
          Please arrive by 14:00
        </div>
        {/* <div>
          <img src="https://www.stpaulparish.ca/images/photos/st-paul-parish-20190504.jpg"></img>
        </div> */}
      </div>

      <div className="content-wrapper">
        <h2 className="content-title">Reception</h2>
        <span>
          Stanley Park Pavilion
          <br />
          610 Pipeline Rd
          <br />
          Vancouver, BC
          <br />
          <a
            href="https://goo.gl/maps/qBmzwM4ZDW1JH4ia6"
            className="directions-link"
          >
            Get Directions
          </a>
          <br />
          <br />
          Cocktail hour begins at 17:00
          <br />
          Please arrive by 18:30
        </span>
      </div>

      <div className="content-wrapper">
        <h2 className="content-title">Details</h2>

        <h4>Attire</h4>
        <div>Black Tie Optional</div>
        <br />

        <h4>Colour Palette</h4>
        <span className="colour blush"></span>
        <span className="colour navy"></span>
        <span className="colour baby-blue"></span>
        <span className="colour white"></span>
        <span className="colour green"></span>
      </div>
    </div>
  );
}

export default Info;
