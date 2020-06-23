import React, { useState } from "react";
import "./App.css";

function CovidBanner() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="banner center">
      {isExpanded ? (
        <div>
          <div className="banner-text--x-wrapper">
            <div className="banner-text--x" onClick={() => setIsExpanded(!isExpanded)}>x</div>
          </div>
          <p>
            Out of an abundance of caution for the health and safety of our
            loved ones, we have made the difficult decision to adjust our
            wedding plans.
            <br></br>
            We will be holding an intimate ceremony with our immediate family
            and wedding party on our original September date.
          </p>
          <p>
            We still want to dance with you all, and so we are looking forward
            to celebrating our marriage with you at our reception on April 30,
            2021.
            <br></br>
            Interesting times lead to creative solutions, so we thank you all
            for your understanding.
          </p>
          <p> Love, Josué and Shanice</p>
        </div>
      ) : (
        <div>
          <p className="banner-text--alert"> A COVID-19 update from the couple </p>
          <div className="banner-text--arrow">
            <p class="arrow" onClick={() => setIsExpanded(!isExpanded)}></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CovidBanner;
