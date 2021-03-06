import React from "react";
import "./App.css";
import ReceptionIcon from "./images/reception-icon.svg";
import CeremonyIcon from "./images/ceremony-icon.svg";

function Info() {
  return (
    <div className="bg--light-blue">
      {/* <img src="https://i.imgur.com/HkPmbb1.jpg" className="header-image" alt="engagement" /> */}
      <div className="section">
        <div className="content-wrapper">
          <h2 className="content-title">Ceremony</h2>
          <div>
            <img src={CeremonyIcon} className="info--icon" alt="Church bells" />
            <p className="info--date">September 12, 2020</p>
            <p><b>2:00PM PST</b></p>
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
            <div class="info--ceremony">
              <p>
                Due to the ongoing pandemic, we will be holding an intimate ceremony
              in the presence of our immediate family and wedding party.
              </p>
              <p>
              <b>
              Our ceremony will be available to stream live through <a href="https://youtu.be/slmjtHKoYi0">this link.</a> 
              &nbsp;In the case of technical difficulties, our videographers will be providing a backup link in this <a href="https://l8r.it/KhLc">shared document.</a> 
              </b>
              </p>
              <p>
              Please use the hashtag <b>#S&JWeddingDay</b> to share your photos with us through social media.
              </p>
            </div>
          </div>
          {/* <div>
          <img src="https://www.stpaulparish.ca/images/photos/st-paul-parish-20190504.jpg"></img>
        </div> */}
        </div>

        <div className="content-wrapper">
          <h2 className="content-title">Reception</h2>
          <div>
            <img
              src={ReceptionIcon}
              className="info--icon"
              alt="Clinking wine glasses"
            />
            <p className="info--date">April 30, 2021</p>
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
            We are keeping a close eye on world events, and anxiously await the
            day we can celebrate our wedding with you all safely.
          </div>
        </div>

        <div className="content-wrapper">
          <h2 className="content-title">Other Details</h2>

          <h4 className="info--details">Attire</h4>
          <div>Semi-formal</div>
          <br />

          <h4 className="info--details">Colour Palette</h4>
          <span className="colour blush"></span>
          <span className="colour baby-blue"></span>
          <span className="colour navy"></span>
        </div>
      </div>
    </div>
  );
}

export default Info;
