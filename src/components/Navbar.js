// Navbar.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Добавленный импорт
import AuthButtons from './AuthButtons';
import '../styles/Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFriendsDropdown: false,
    };
  }

  toggleFriendsDropdown = () => {
    this.setState((prevState) => ({
      showFriendsDropdown: !prevState.showFriendsDropdown,
    }));
  };

  handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User logged out');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  render() {
    const { showFriendsDropdown } = this.state;

    return (
      <div className="nav-container">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li onMouseEnter={this.toggleFriendsDropdown} onMouseLeave={this.toggleFriendsDropdown}>
              <Link to="/friends">Friends</Link>
              {showFriendsDropdown && (
                <ul className="friends-dropdown">
                  <li><Link to="/profile/1">Ivan Ivanov</Link></li>
                  <li><Link to="/profile/2">Maria Sidorova</Link></li>
                  <li><Link to="/profile/3">Alexey Petrov</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/messenger">Messenger</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/customer-service">Customer Service</Link></li>
            <li><AuthButtons /></li>
            <li><button onClick={this.handleLogout}>Logout</button></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
