import React, { Component } from 'react';
import './App.css';

import Header from './components/Layouts/Header';
import ProfilePage from './components/Page/User/ProfilePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProfilePage />
      </div>
    );
  }
}

export default App;
