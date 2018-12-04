import React, { Component } from 'react';
import './SlideBarMenu.css';
import newsfeed from '../../../../assets/images/ico/new-menu-ico.png';
import explore from '../../../../assets/images/ico/explore-menu-ico.png';
import stories from '../../../../assets/images/ico/stories-menu-ico.png';
import profile from '../../../../assets/images/ico/profile-menu-ico.png';

class SlideBarMenu extends Component {
  render() {
    return (
      <div className="slidebar-menu">
        <div className="menu-newsfeed">
          <button type="button" className="menu-newsfeed-btn hvr-pulse">
            <img src={newsfeed} alt="Newsfeed" />
          </button>
        </div>
        <div className="menu-explore">
          <button type="button" className="menu-explore-btn hvr-pulse">
            <img src={explore} alt="Explore" />
          </button>
        </div>
        <div className="menu-stories">
          <button type="button" className="menu-stories-btn hvr-pulse">
            <img src={stories} alt="Explore" />
          </button>
        </div>
        <div className="menu-profile">
          <button type="button" className="menu-profile-btn hvr-pulse">
            <img src={profile} alt="Explore" />
          </button>
        </div>
      </div>
    );
  }
}

export default SlideBarMenu;
