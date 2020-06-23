import React from "react";
import "./App.css";

function WeddingParty() {
  return (
    <div className="center content-text">
      {/* <img
        src="https://i.imgur.com/HkPmbb1.jpg"
        className="header-image"
        alt="engagement"
      /> */}
      <h2 className="content-title">Meet our wedding party</h2>
      <p>
        We’ve known all these wonderful people for many, many years and would
        love for you to get to know a little about them.
      </p>
      <div className="content-wrapper">
        <h3 className="content-title">The Bride's Crew</h3>
        <p>Maiysha McSavaney</p>
        <p>Hershey Rendon</p>
        <p>Kielle Marasigan</p>
        <p>Faith Lopez</p>
        <p>Brittany Sriranpong</p>
      </div>
      <div className="content-wrapper">
        <h3 className="content-title">The Groom's Crew</h3>
        <p>
          Carlos Arevalo
          <br />
          He’s been my older brother my WHOLE life. He loves TMNT and Tupac, but
          hates when I tell him tupac puns (usted-pac is the formal of tupac)
          and loves obscure 90’s references.{" "}
        </p>
        <p>
          Justin Heron
          <br />
          Been friends with this guy since Grade 8. He’s a big history buff and
          a bigger nerd. Need something to talk to him about? Ask about The War
          of 1812 or Star Wars (Hope you have four hours).
        </p>
        <p>
          Jason Ng
          <br />
          He’s my brother from another mother.{" "}
        </p>
        <p>
          Ruby Bonilla
          <br />
          My grooms(wo)man - she earns a special place in this group. She’s my
          sister-in-law and a good friend. She loves her family and shoes and
          can do a wicked Jamaican accent. Just ask her!
        </p>
        <p>
          Ashton Sriranpong
          <br />
          Shanice has known him since they were tiny and I’ve gotten to know him
          since Shanice and I have gotten together. He’s my workout partner.
        </p>
      </div>
    </div>
  );
}

export default WeddingParty;
