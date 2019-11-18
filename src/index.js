import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Info from './Info.js'
import Rsvp from './Rsvp.js'
import Photos from './Photos.js'
import Registry from './Registry.js'
import Header from './Header.js'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <Header />
    <Switch>
      <Route path="/info"><Info/></Route>
      <Route path="/rsvp" component={Rsvp} />
      <Route path="/photos" component={Photos} />
      <Route path="/registry" component={Registry} />
      <Route path="/" component={App} />
      {/* <Route component={Notfound} /> TODO: Redirect to App */}
    </Switch>
</Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
