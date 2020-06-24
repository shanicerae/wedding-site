import React from "react";
import "./App.css";
import PinkBranch from "./images/pink-branch.png";
import PinkFlower from "./images/pink-flower.png";

function App() {
  return (
    <div className="info dark-blue">
      <img
        src="https://i.imgur.com/HkPmbb1.jpg"
        className="header-image"
        alt="engagement"
      />
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

      <img
        src="https://i.imgur.com/HkPmbb1.jpg"
        className="header-image"
        alt="engagement"
      />

      <div className="section bg--light-blue">
        <div className="content-wrapper">
          <h2 className="info--title--nop">A litte bit about us</h2>
          <img src={PinkFlower} className="info--img" alt="Pink Flower"></img>
          <p>
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
              don’t know if you’ve noticed a theme so far, but we really enjoy
              watching TV together. That and eating food.
            </p>
            <p>
              <span className="bold">Dogs or cats?:</span> Doggos for sho’
            </p>
            <p>
              <span className="bold">How he proposed:</span> I think the only
              words that came out were “…-arry me?” The beginning part of that
              was only mouthed. She saw the ring and it was enough.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;