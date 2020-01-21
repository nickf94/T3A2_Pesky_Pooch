import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";


export default class loginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  onFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    axios.post("http://localhost:3000/api/login", { email, password })
    .then(res => { this.props.onLogin(res.data.token); this.props.history.push("/") })
    .cathc(err => console.error(err))
  };

  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    console.log(this.props);
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
