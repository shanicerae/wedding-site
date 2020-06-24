import React /*, { useState }*/ from "react";
import "./App.css";
import CoffeeShop from "./images/us/coffee-shop.jpeg";

function Rsvp() {
  // const [guestCount, setGuestCount] = useState(0);

  // function createArray(n) {
  //   const array = [];

  //   while (--n >= 0) {
  //     array.push(n);
  //   }

  //   return array;
  // }

  return (
    <div className="center dark-blue">
      <img src={CoffeeShop} className="header-image" alt="engagement" />
      <div className="section bg--light-blue">
        <div className="content-wrapper">
          <h2 className="content-title">Trying to RSVP?</h2>
          <p className="info--details">You're a tad early!</p>
          <p>
            Once the formal invitations have been sent out, you will have an
            opportunity to RSVP to our reception. <br></br> We hope to see you
            all there on April 30, 2021!
          </p>
        </div>
      </div>

      {/* <form>
        <label htmlFor="guest-count">
          How many guests are you responding for?
        </label>
        <select
          name="guest-count"
          id="guest-count"
          required=""
          value={guestCount}
          onChange={(e) => setGuestCount(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {createArray(guestCount).map((i) => {
          return (
            <div key={i}>
              <label htmlFor="full-name">Name of Guest</label>
              <input name="guest-name"></input>
            </div>
          );
        })}
      </form> */}
    </div>
  );
}

export default Rsvp;
