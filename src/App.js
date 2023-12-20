import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Profile from './pages/Profile.js';
import Messenger from './pages/Messenger.js';
import News from './pages/News.js';
import CustomerService from './pages/CustomerService.js';
import Friends from './pages/Friends.js';
import ChatSupport from './pages/ChatSupport.js';
import Blog from './pages/Blog.js';
import IvanIvanovProfile from './pages/IvanIvanovProfile.js';
import MariaSidorovaProfile from './pages/MariaSidorovaProfile.js';
import AlexeyPetrovProfile from './pages/AlexeyPetrovProfile.js';
import ElenaSydorovaProfile from './pages/ElenaSydorovaProfile.js';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import AuthButtons from './components/AuthButtons.js';
import ForgotPassword from './pages/ForgotPassword.js';
import ErrorBoundary from './components/ErrorBoundary.js';

import { auth } from './firebaseConfig';

class App extends Component {
  render() {
    return (
      <Router>
        <ErrorBoundary>
          <div style={{ display: 'flex' }}>
            <Navbar />
            <div style={{ flex: 1, padding: '20px' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/messenger" element={<Messenger />} />
                <Route path="/news" element={<News />} />
                <Route path="/customer-service" element={<CustomerService />} />
                <Route path="/friends" element={<Friends />} />
                <Route path="/chat-support" element={<ChatSupport />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/profile/1" element={<IvanIvanovProfile />} />
                <Route path="/profile/2" element={<MariaSidorovaProfile />} />
                <Route path="/profile/3" element={<AlexeyPetrovProfile />} />
                <Route path="/profile/lena" element={<ElenaSydorovaProfile />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
            </div>
          </div>
        </ErrorBoundary>
        <Footer />
      </Router>
    );
  }
}

export default App;
