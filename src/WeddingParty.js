import React from "react";
import "./App.css";
import Maiysha from "./images/wedding-party/maiysha.jpg";
import Hershey from "./images/wedding-party/hershey.jpg";
import Kielle from "./images/wedding-party/kielle.jpg";
import Faith from "./images/wedding-party/faith.jpg";
import Brittany from "./images/wedding-party/brittany.jpg";
import Carlos from "./images/wedding-party/CarlosJr.jpg";
import Justin from "./images/wedding-party/Justin.jpg";
import Jason from "./images/wedding-party/Jason.PNG";
import Ruby from "./images/wedding-party/Ruby.jpg";
import Ashton from "./images/wedding-party/Ashton.jpg";
import Branch from "./images/branch.png";
import Branch2 from "./images/branch-2.png";

function WeddingParty() {
  return (
    <div className="center content-text section">
      <h2 className="alt-content-title">Meet our wedding party</h2>
      <p className="content-subtitle">
        We’ve known all these wonderful people for many, many years and would
        love for you to get to know a little about them.
      </p>
      <div className="content-wrapper">
        <h3 className="content-title--nop">The Bride Tribe</h3>
        <p className="alt-content-title">Shanice's nearest and dearest</p>
        <div className="wp--container">
          <div className="wp--img-container">
            <img src={Maiysha} alt="Maiysha" className="wp--img"></img>
          </div>
          <div className="wp--text">
            <p className="wp--name">Maiysha McSavaney</p>
            <p className="wp--name alt-content-title">Maid of Honour</p>
            <p className="wp--description">
              Shanice's favourite (and only) sister. An{" "}
              <a
                href="https://www.youtube.com/channel/UC4yXqHGZ5rFyK9neF3KlfTg/featured"
                target="_blank"
                rel="noopener noreferrer"
              >
                aspiring YouTuber
              </a>{" "}
              currently studying at BCIT.
            </p>
          </div>
        </div>
        <img src={Branch} className="wp--break" alt="Branch" />
        <div className="wp--container">
          <div className="wp--text">
            <p className="wp--name">Hershey Rendon</p>
            <p className="wp--description">
              Shanice's cousin. A standard millenial - loves coffee, wine and
              charcuterie boards.
            </p>
          </div>
          <div className="wp--img-container">
            <img src={Hershey} alt="Hershey" className="wp--img"></img>
          </div>
        </div>
        <img src={Branch2} className="wp--break" alt="Branch" />
        <div className="wp--container">
          <div className="wp--img-container">
            <img src={Kielle} alt="Kielle" className="wp--img"></img>
          </div>
          <div className="wp--text">
            <p className="wp--name">Kielle Marasigan</p>
            <p className="wp--description">
              Shanice's cousin. She enjoys the three B's: beers, bonfires and
              the (Jonas) Brothers. Also, is a complete badass who paints cars -
              just check out her{" "}
              <a
                href="https://www.tiktok.com/@kiellem"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
              !
            </p>
          </div>
        </div>
        <img src={Branch} className="wp--break" alt="Branch" />
        <div className="wp--container">
          <div className="wp--text">
            <p className="wp--name">Faith Lopez</p>
            <p className="wp--description">
              Shanice's second cousin. Tougher than she looks and has a black
              belt to prove it!
            </p>
          </div>
          <div className="wp--img-container">
            <img
              src={Faith}
              alt="Faith climbing a tree"
              className="wp--img"
            ></img>
          </div>
        </div>
        <img src={Branch2} className="wp--break" alt="Branch" />
        <div className="wp--container">
          <div className="wp--img-container">
            <img src={Brittany} alt="Brittany" className="wp--img"></img>
          </div>
          <div className="wp--text">
            <p className="wp--name">Brittany Sriranpong</p>
            <p className="wp--description">
              Actually not technically a cousin, but has known Shanice since
              they were littles. Challenge her to a handstand!
            </p>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <h3 className="content-title--nop">The Groom's Crew</h3>
        <p className="alt-content-title">The ones who have Josué's back</p>
        <div className="wp--container">
          <div className="wp--img-container">
            <img src={Carlos} alt="Carlos" className="wp--img"></img>
          </div>
          <div className="wp--text">
            <p className="wp--name">Carlos Arevalo</p>
            <p className="wp--name alt-content-title">Best Man</p>
            <p className="wp--description">
              Josué’s brother his WHOLE life. He loves TMNT and Tupac, but hates
              when Josué tells him Tupac puns (usted-pac is the formal of tu-pac)
              and loves obscure 90’s references.
            </p>
          </div>
        </div>
        <img src={Branch} className="wp--break" alt="Branch" />
        <div className="wp--container">
          <div className="wp--text">
            <p className="wp--name">Justin Heron</p>
            <p className="wp--description">
              Residing in London, England, Josué has been friends with him since
              Grade 8. He’s a big history buff and a bigger nerd. Need something
              to talk about? Ask about The War of 1812 or Star Wars (Hope you
              have 4 hours).
            </p>
          </div>
          <div className="wp--img-container">
            <img src={Justin} alt="Justin" className="wp--img"></img>
          </div>
        </div>
        <img src={Branch2} className="wp--break" alt="Branch" />
        <div className="wp--container">
          <div className="wp--img-container">
            <img src={Jason} alt="Jason" className="wp--img"></img>
          </div>
          <div className="wp--text">
            <p className="wp--name">Jason Ng</p>
            <p className="wp--description">
              Josué’s brother from another mother, Jason’s passion lies in
              gadgets and Marvel, but nothing compares to his love for sour
              keys. He cannot turn one down no matter what. Want to break the
              ice? Sour is the key.
            </p>
          </div>
        </div>
        <img src={Branch} className="wp--break" alt="Branch" />
        <div className="wp--container">
          <div className="wp--text">
            <p className="wp--name">Ruby Bonilla</p>
            <p className="wp--description">
              This grooms(wo)man earns a special place on this list. She’s the
              older sister Josué never had and one of his closest friends. This
              <a href="https://www.instagram.com/rubystyles.lettering/">awesome calligrapher</a> loves her family and shoes and can do a
              wicked Jamaican accent. Just ask her!
            </p>
          </div>
          <div className="wp--img-container">
            <img src={Ruby} alt="Ruby" className="wp--img"></img>
          </div>
        </div>
        <img src={Branch2} className="wp--break" alt="Branch" />
        <div className="wp--container">
          <div className="wp--img-container">
            <img src={Ashton} alt="Ashton" className="wp--img"></img>
          </div>
          <div className="wp--text">
            <p className="wp--name">Ashton Sriranpong</p>
            <p className="wp--description">
              An honour to have him on this roster, Ash has known Shanice since
              they were littles and now works out with Josué. A truly
              interesting dude - he can speak Arabic and dreams of owning a 1991
              Acura NSX.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeddingParty;
