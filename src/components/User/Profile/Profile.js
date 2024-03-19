import React, { useState } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
  const [choose, setChoose] = useState(1);
  return (
    <div className="profile">
      <div className="profile-main">
        <div className="profile-background"></div>
        <div className="profile-info">
          <div className="profile-info_avatar">
            <div className="profile-info_avatar-img"></div>
          </div>
          <div className="profile-info_container">
            <div className="profile-info_Name">Shiro</div>
            <span className="profile-info_date-created">
              Joined November <br></br> 2, 2023
            </span>
          </div>
        </div>
        <div onClick={() => setChoose(1)} className={choose ? 'profile-setting_btn active' : 'profile-setting_btn'}>
          Profile Settings
        </div>
        <div
          onClick={() => setChoose(0)}
          className={!choose ? 'profile-orderList_btn active' : 'profile-orderList_btn'}
        >
          Orders List
          <span className="profile-orderList_btn-count">0</span>
        </div>
      </div>
      {choose ? (
        <div className="profile-setting-info">
          <div className="profile-setting-item">
            <div className="prodile-setting-item_content">username</div>
            <input type="text" className="profile-setting-item-input active" required value="Shiro" />
          </div>
          <div className="profile-setting-item">
            <div className="prodile-setting-item_content">e-mail address</div>
            <input type="text" className="profile-setting-item-input active" required value="admin@gmail.com" />
          </div>

          <div className="profile-setting-item">
            <div className="prodile-setting-item_content">new password</div>
            <input type="text" className="profile-setting-item-input" />
          </div>
          <div className="profile-setting-item">
            <div className="prodile-setting-item_content">confirm password</div>
            <input type="text" className="profile-setting-item-input" />
          </div>

          <div className="profile-setting-update_btn">Update Profile</div>
        </div>
      ) : (
        <div className="profile-orderList">
          No Orders
          <Link to="/#" className="profile-orderList-shopping_btn">
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  );
}

export default Profile;
