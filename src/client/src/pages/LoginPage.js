import React, { Component } from 'react';
import LoginForm from '../forms/LoginForm';

class LoginPage extends Component {
  render() {

    return(
      <div>
        <h1>Login a user</h1>
        <LoginForm onLogin={this.props.onLogin} />
      </div>
    )
  }
}

export default LoginPage;
