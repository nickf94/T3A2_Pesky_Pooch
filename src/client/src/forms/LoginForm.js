import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";


export default class loginForm extends Component {
  state = {
    email: "",
    password: "",
    submit: false
  };

  onFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    const params = {
      email,
      password
    }
    // HEROKU APP URL: https://peskypoochapi.herokuapp.com
  
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

  render() {
    const { email, password } = this.state;
    return this.state.submit ? (
      <Redirect to="/" />
    ) : (
      <form onSubmit={this.onFormSubmit}>
        <p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={event => this.onInputChange("email", event)}
          />
        </p>
        <p>
          <label htmlFor="email">Password</label>
          <input
            type="password"
            value={password}
            onChange={event => this.onInputChange("password", event)}
          />
        </p>
        <p>
          <input type="submit" value="Login user" />
        </p>
     </form>
   );
  }
}
