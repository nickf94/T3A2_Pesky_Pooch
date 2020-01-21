import React, { Component } from 'react';
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom";
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
            <Switch>
              <Route exact path="/login" render={(props) => {
                  return <LoginPage {...props} onLogin={this.onLogin} />
                }} />
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/contact" component={ContactPage} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}



export default App;
