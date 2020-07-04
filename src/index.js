import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Info from "./Info.js";
import Rsvp from "./Rsvp.js";
import WeddingParty from "./WeddingParty.js";
import Registry from "./Registry.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import ScrollToTop from "./ScrollToTop.js";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

const routing = (
  <Router basename={process.env.PUBLIC_URL}>
    <ScrollToTop />
    <Header />
    <div className="wrapper">
      <Switch>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/rsvp" component={Rsvp} />
        <Route path="/wedding-party" component={WeddingParty} />
        <Route path="/registry" component={Registry} />
        <Route path="/" component={App} />
        <Redirect to="/" />
      </Switch>
    </div>
    <Footer />
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
