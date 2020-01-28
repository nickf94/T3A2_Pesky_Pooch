import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import Navigationbar from './components/Navigationbar'

class App extends Component {
  /* Use a state to collect the token and user from our login form */

  state = {
    token: sessionStorage.getItem("token"),
    user: sessionStorage.getItem("user")
  }

  /* on login the token and user is stored into session storage */

  onLogin = (token, user) => {
    sessionStorage.setItem("token", token)
    sessionStorage.setItem("user", user)
    this.setState({ token, user })
  }

  render() {

    /* Renders the routes and the navbar on all pages of the app */

    return (
      <React.Fragment>
        <Router>
          <div>
            <Navigationbar />
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services">
              < Services user={this.state.user} />
            </Route>
            <Route exact path="/contact" >
             < ContactPage user={this.state.user} />
            </Route>
            <Route exact path="/login">
              <LoginPage onLogin={this.onLogin} />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}



export default App;
