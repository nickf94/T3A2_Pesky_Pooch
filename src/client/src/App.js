import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Home } from './Home';
import { About } from './About';
import { Services } from './Services';
import ContactPage from './ContactPage';
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
          <div>
            { token && <h4>User is logged in!</h4>}
              <Link to="/login" render={(props) => {
                  return <LoginPage {...props} onLogin={this.onLogin} />
                }} />
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
          </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/contact">
              <ContactPage />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}



export default App;
