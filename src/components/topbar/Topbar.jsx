import React from 'react'
import "./topbar.css"
import {Notifications, Language, Settings}  from '@mui/icons-material';

export default function Topbar() {
    return (
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">admin</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <Notifications></Notifications>
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language></Language>
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Settings></Settings>
            </div>
            <img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg" alt="" className="topAvatar" />
          </div>
        </div>
      </div>
    );
}
