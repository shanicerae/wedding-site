import React from "react";
import "./App.css";
import PinkBranch from "./images/pink-branch.png";

function Footer() {
  return (
    <div className="footer center dark-blue">
      <img
        src={PinkBranch}
        className="info--img"
        alt="Pink Flowers on a Branch"
      ></img>
      <div className="footer--content">
        <div className="footer--credit">
          <p className="footer--title">Thanks to</p>
          <p><a href="https://www.instagram.com/hersheyrendonphotography">Hershey Rendon Photography</a> for the engagement photos</p>
          <p><a href="https://foxandhazel.com">Fox and Hazel</a> for the flower graphics</p>
        </div>
        <div className="footer--contact">
          <p className="footer--title">Questions?</p>
          <p>For further details, please contact us at <a href="mailto:joandshaneats@gmail.com?subject=Wedding Website Questions">joandshaneats@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
