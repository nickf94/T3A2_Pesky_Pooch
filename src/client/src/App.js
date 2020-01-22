import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import { Navigationbar } from './components/Navigationbar'

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

          <Navigationbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={ContactPage} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}



export default App;
