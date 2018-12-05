import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./ProfilePage.css";
import TimeLine from "./TimeLine";
import thumbSample from "../../../../assets/images/pic/thumb-profile-sample.jpeg";
import avatar from "../../../../assets/images/pic/avartar-sp.jpg";

class ProfilePage extends Component {
  render() {
    return (
      <div className="profile-page">
        <div className="container">
          <div className="container-custom">
            <div className="top-profile">
              <div className="row">
                <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="top-profile-block">
                    <div className="top-profile-block-thumb">
                      <img
                        src={thumbSample}
                        alt=""
                        className="top-profile-block-crop"
                      />
                    </div>
                    <div className="top-profile-block-menu">
                      <div className="top-profile-block-menu-left">
                        <NavLink to="/" className="profile-menu-spacing">
                          Timeline
                        </NavLink>
                        <NavLink to="/" className="profile-menu-spacing">
                          Photos
                        </NavLink>
                        <NavLink to="/" className="profile-menu-spacing">
                          Friend
                        </NavLink>
                      </div>
                      <div className="top-profile-block-info-middle">
                        <div className="info-middle-name">James Spiegel</div>
                        <div className="info-middle-sub">James Spiegel</div>
                      </div>
                      <div className="top-profile-block-menu-right">
                        <NavLink to="/" className="profile-menu-spacing">
                          About
                        </NavLink>
                        <NavLink to="/" className="profile-menu-spacing">
                          Sample
                        </NavLink>
                        <NavLink to="/" className="profile-menu-spacing">
                          ...
                        </NavLink>
                      </div>
                      <div className="info-middle-avatar">
                        <img src={avatar} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="container-content">
            <TimeLine />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
