import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App dark-blue">
      <img
        src="https://i.imgur.com/HkPmbb1.jpg"
        className="header-image"
        alt="engagement"
      />

      <div className="content-wrapper">
        <h2 className="content-title">How We Met</h2>
        <p>
          Her: I’m hungry.<br></br>
          Him: Same<br></br>
          Her: Wanna get something to eat?<br></br>5 years later...<br></br>
          Still eating together<br></br>
        </p>

        <p>
          We met while working at The Bay together. It was a rainy day in late
          January and Shanice asked him if he’d go to the Hot Chocolate Festival
          with her. Then in February Josue asked her if she’d do Dine Out
          Vancouver with him. Pretty soon they realized they enjoyed much more
          than just the food and have been together ever since.
        </p>
      </div>

      <div className="content-wrapper">
        <h2 className="content-title">A litte bit about us</h2>
        <p>
          Favourite food to eat: Pho from Pho Lan in Richmond<br></br>
          Best Meal: Hell’s Kitchen in Las Vegas, though L'Abattoir on the night
          we got engaged is a pretty close runner-up.<br></br>
          Dream Vacation: Eating our way through Southeast Asia or Spain
          <br></br>
          Favourite thing to do together: I don’t know if you’ve noticed a theme
          so far, but we really enjoy watching TV together. That and eating
          food.<br></br>
          Dogs or cats?: Doggos for sho’<br></br>
          How he proposed: I think the only words that came out were “…-arry
          me?” The beginning part of that was only mouthed. She saw the ring and
          it was enough.<br></br>
        </p>
      </div>
    </div>
  );
}

export default App;
