import React, { Component } from 'react';
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom";
import { Home } from './Home';
import { About } from './About';
import { Services } from './Services';
import { Contact } from './Contact';
import LoginPage from './LoginPage'

class App extends Component {
  state = {
    token: sessionStorage.getItem("token")
  }

  onLogin = (token) => {
    sessionStorage.setItem("token", token)
    this.setState({ token })
  }
  render() {
    const { token } = this.props;

    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
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
