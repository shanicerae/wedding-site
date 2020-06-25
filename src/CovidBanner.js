import React, { useState } from "react";
import "./App.css";
import TopBouquet from "./images/Top-Bouquet-Diagonal.png";
import BottomBouquet from "./images/Bottom-Bouquet-Diagonal.png";

function CovidBanner() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="banner center">
      {isExpanded ? (
        <div className="banner--expanded">
          <div className="banner-text--x-wrapper">
            <div
              className="banner-text--x"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              x
            </div>
          </div>
          <img
            src={TopBouquet}
            alt="engagement"
            className="banner-florals--top"
          />
          <div className="banner-text--expanded">
            <p>
              Out of an abundance of caution for the health and safety of our
              loved ones, we have had to make the decision to tweak our wedding
              plans.
              <p></p>
              An intimate ceremony will be held with our immediate family and
              wedding party on our original September date.
            </p>
            <p>
              But what is a wedding without the people we love most? We are
              looking forward to celebrating with you all at our reception on
              April 30, 2021.As we keep a close eye on current events, we hope
              that we will be able to see you all safely next year.
            </p>
            <p>
              We appreciate your patience and support during these odd times.
              Please look to this page for the most up-to-date information
              regarding our special day.
            </p>
            <p className="signature-text">Much love, Josué and Shanice</p>
          </div>
          <img
            src={BottomBouquet}
            alt="engagement"
            className="banner-florals--bottom"
          />
        </div>
      ) : (
        <div>
          <p className="banner-text--alert">
            {" "}
            An important update from the couple{" "}
          </p>
          <div className="banner-text--arrow">
            <p class="arrow" onClick={() => setIsExpanded(!isExpanded)}></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CovidBanner;
