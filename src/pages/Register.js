import React, { Component } from 'react';
import { createUser } from '../api';
import '../styles/Register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: null,
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, error: null });
  };

  handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      this.setState({ error: 'Passwords do not match' });
      return;
    }

    try {
      const userData = { username, email, password };
      await createUser(userData);
      console.log('User registered successfully');
    } catch (error) {
      console.error('Registration error:', error.message);
      this.setState({ error: 'Registration failed. Please try again.' });
    }
  };

  render() {
    const { username, email, password, confirmPassword, error } = this.state;

    return (
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={this.handleRegister}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={this.handleInputChange}
            required
          />

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

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleInputChange}
            required
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
