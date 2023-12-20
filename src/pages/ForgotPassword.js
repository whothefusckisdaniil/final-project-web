import React, { Component } from 'react';
import '../styles/ForgotPassword.css';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };
  }

  handleForgotPassword = (e) => {
    e.preventDefault();
    console.log('Forgot Password:', { email: this.state.email });
  };

  render() {
    const { email } = this.state;

    return (
      <div className="forgot-password-container">
        <h2>Forgot Password</h2>
        <form onSubmit={this.handleForgotPassword}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
            required
          />

          <button type="submit">Reset Password</button>
        </form>
      </div>
    );
  }
}

export default ForgotPassword;
