import React, { Component } from "react";
import "./TimeLine.css";
import avatar from '../../../../../assets/images/pic/avartar-sp.jpg';

class TimeLine extends Component {
  render() {
    return (
      <div className="time-line-profile">
        <div className="row">
          <div className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
            <div className="time-line-block">
              <div class="post__author author vcard inline-items">
                <img src={avatar} alt="author" />
                <div class="author-date">
                  <a class="h6 post__author-name fn" href="02-ProfilePage.html">
                    James Spiegel
                  </a>
                  <div class="post__date">
                    <time class="published" datetime="2017-03-24T18:18">
                      19 hours ago
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-12 col-12">
            <div className="time-line-block">
              <div className="time-line-profile-intro">
                <div className="profile-intro-title">Profile</div>
                <div className="profile-intro-content">
                  <div className="profile-intro-content-box">
                    <div className="profile-intro-content-title">About me:</div>
                    <div className="profile-intro-content-text">
                      :About me:About me:About me:About me:
                    </div>
                  </div>
                  <div className="profile-intro-content-box">
                    <div className="profile-intro-content-title">About me:</div>
                    <div className="profile-intro-content-text">
                      About me:About me:About me:About me:About me:
                    </div>
                  </div>
                  <div className="profile-intro-content-box">
                    <div className="profile-intro-content-title">About me:</div>
                    <div className="profile-intro-content-text">
                      About me:About me:About me:About me:About me:
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeLine;
