import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import '../styles/styles.scss'


export default class loginForm extends Component {
  /* state takes in email and password for a user login */
  state = {
    email: "",
    password: "",
    submit: false
  };

  /* when the user logs in to the site it pulls the email and password from the state */
  onFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    const params = {
      email,
      password
    }
    // HEROKU APP URL: https://peskypoochapi.herokuapp.com

    /* axios posts to the backend and then renders a route to an api */
    axios.post("http://localhost:7002/api/login", params)
    .then(res => {
      this.props.onLogin(res.data.token, res.data.currentuser)
      this.setState({ submit: true })
      })
    .catch(err => console.error(err))
  }

  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

/* axios deletes the admin user from the api using axios.delete and using the url as a parameter */

  handleRemove = (e) => {
    e.preventDefault();
    sessionStorage.removeItem('token')
  }


  /* form for the login screen */
  render() {

    const { email, password } = this.state;
    return this.state.submit ? (
      <Redirect to="/" />
    ) : (
      <container className="form-container">
      <form onSubmit={this.onFormSubmit} className="login-form">
        <fieldset>
          <label name="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={event => this.onInputChange("email", event)}
          />
        </fieldset>
        <fieldset>
          <label name="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={event => this.onInputChange("password", event)}
          />
        </fieldset>
        <fieldset>
          { (sessionStorage.getItem('token')) ?
          (<input type="submit" value="logout user" onChange={this.handleRemove} />):
          (<input type="submit" value="Login user" />)}
        </fieldset>
     </form>
     </container>
   );
  }
}
