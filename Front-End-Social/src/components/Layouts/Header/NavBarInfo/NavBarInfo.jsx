import React, { Component } from 'react';
import './NavBarInfo.css';
import searchIco from '../../../../assets/images/ico/search-ico.png';
import userReqIco from '../../../../assets/images/ico/user-req-ico.png';
import chatIco from '../../../../assets/images/ico/mess-chat-ico.png';
import notiIco from '../../../../assets/images/ico/notification-ico.png';
import avatar from '../../../../assets/images/pic/avartar-sp.jpg';

class NavBarInfo extends Component {
  render() {
    return (
      <div className="navbar-info">
        <div className="navbar-info-left">
          <div className="navbar-info-symbol">
            <a href="" className="navbar-info-symbol-logo">

            </a>
          </div>
          <div className="navbar-info-title">
            Newsfeed
          </div>
          <div className="navbar-info-search">
            <form method="post" className="navbar-search-form">
              <input type="text" className="search-form-textbox" placeholder="Tìm kiếm ..." />
              <button type="button" className="search-form-button">
                <img src={searchIco} alt="" className="search-form-button-ico" />
              </button>
            </form>
          </div>
        </div>
        <div className="navbar-info-right">
          <div className="user-control">
            <div className="user-ctrl-req">
              <button type="button" className="btn-user-req">
                <img src={userReqIco} alt="" />
              </button>
            </div>
            <div className="user-ctrl-chat">
              <button type="button" className="btn-user-chat">
                <img src={chatIco} alt="" />
              </button>
            </div>
            <div className="user-ctrl-req">
              <button type="button" className="btn-user-noti">
                <img src={notiIco} alt="" />
              </button>
            </div>
            <div className="user-ctrl-sear">
              <button type="button" className="btn-user-sear">
                <img src={searchIco} alt="" />
              </button>
            </div>
          </div>
          <div className="user-inf">
            <div className="user-inf-img">
              <img src={avatar} alt="" />
              <span class="icon-status online"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBarInfo;
