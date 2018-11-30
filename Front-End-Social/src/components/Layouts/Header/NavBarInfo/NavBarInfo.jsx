import React, { Component } from 'react';
import './NavBarInfo.css'

class NavBarInfo extends Component {
  render() {
    return (
      <div className="navbar-info">
        <div className="navbar-info-search">
          <form method="post" className="navbar-search-form">
            <input type="text" className="search-form-textbox" placeholder="Search" />
            <input title="Search" value="" type="submit" className="search-form-button" />
          </form>
        </div>
      </div>
    );
  }
}

export default NavBarInfo;
