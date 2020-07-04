import React from "react";
import "./App.css";
import PinkBranch from "./images/pink-branch.png";
import PinkFlower from "./images/pink-flower.png";
import CeremonyIcon from "./images/ceremony-icon.svg";
import Tacos from "./images/us/tacos.jpg";
import Ring from "./images/us/ring.jpg";

function App() {
  return (
    <div className="info dark-blue">
      <div className="section">
        <div className="center">
          <img src={CeremonyIcon} className="info--icon" alt="Church bells" />
          <br />
          <span className="intro--names">
            Josué David Arévalo&nbsp;
            <br className="show-mob" />
            &&nbsp;
            <br className="show-mob" />
            Shanice Rae McSavaney
            <br />
          </span>
          <span className="intro--text">are getting married!</span>
        </div>
      </div>
      <img src={Ring} className="header-image" alt="engagement" />
      <div className="section bg--light-blue">
        <div className="content-wrapper">
          <h2 className="info--title">How We Met</h2>
          <p className="italic">
            Her: I’m hungry.
            <br></br>
            Him: Same
            <br></br>
            Her: Wanna get something to eat?
          </p>
          <span>
            <span className="bold">5 years later...</span>
            <br></br>
            and we're still eating together!<br></br>
          </span>
          <img
            src={PinkBranch}
            className="info--img"
            alt="Pink Flowers on a Branch"
          ></img>
          <p>
            We met while working at The Bay together. It was a rainy day in late
            January and Shanice asked him if he’d go to the Hot Chocolate
            Festival with her. Then in February Josue asked her if she’d do Dine
            Out Vancouver with him. Pretty soon they realized they enjoyed much
            more than just the food and have been together ever since.
          </p>
        </div>
      </div>

      <img src={Tacos} className="header-image cut-image" alt="engagement" />

      <div className="section bg--light-blue">
        <div className="content-wrapper">
          <h2 className="info--title--nop">A litte bit about us</h2>
          <img src={PinkFlower} className="info--img" alt="Pink Flower"></img>
          <div>
            <p>
              <span className="bold">Favourite food to eat:</span> Pho from Pho
              Lan in Richmond
            </p>
            <p>
              <span className="bold">Best Meal:</span> Hell’s Kitchen in Las
              Vegas, though L'Abattoir on the night we got engaged is a pretty
              close runner-up.
            </p>
            <p>
              <span className="bold">Dream Vacation:</span> Eating our way
              through Southeast Asia or Spain
            </p>
            <p>
              <span className="bold">Favourite thing to do together:</span> I
              Food, food and eat. When we're not eating, we're watching the Food
              Network.
            </p>
            <p>
              <span className="bold">Dogs or cats?:</span> Doggos for sho’
            </p>
            <p>
              <span className="bold">How he proposed:</span> I think the only
              words that came out were “…-arry me?” The beginning part of that
              was only mouthed. She saw the ring and it was enough.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
