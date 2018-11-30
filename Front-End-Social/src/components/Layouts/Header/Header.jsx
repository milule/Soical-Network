import React, { Component } from 'react';
import './Header.css'
import NavBarInfo from './NavBarInfo';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <NavBarInfo />
      </header>
    );
  }
}

export default Header;
