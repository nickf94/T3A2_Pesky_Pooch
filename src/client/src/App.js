import React, { Component } from 'react';
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import { Home } from './Home';
import { About } from './About';
import { Services } from './Services';
import { Contact } from './Contact';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}



export default App;
