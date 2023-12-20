// Login.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../api';
import '../styles/Login.css';
import ForgotPassword from './ForgotPassword';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, error: null });
  };

  handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      const userData = { email, password };
      await loginUser(userData);
      console.log('User logged in successfully');
    } catch (error) {
      console.error('Login error:', error.message);
      this.setState({ error: 'Login failed. Please check your credentials.' });
    }
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={this.handleLogin}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            required
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Login</button>

          <Link to="/forgot-password">Forgot Password</Link>
        </form>
      </div>
    );
  }
}

export default Login;
