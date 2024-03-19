import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [account, setAccount] = useState(1);
  const [accountFeatureBoard, setAccountFeatureBoard] = useState(0);

  return (
    <div className="header">
      <div className="header-info">
        <div className="header-info_contact">
          <div className="header-info_contact-phoneNumber">+84 344185327</div>
          <div className="header-info_contact-gmail">minhducanhhuy1@gmail.com</div>
        </div>
        <div className="header-info_media">
          <a className="header-info-icon" href="https://www.facebook.com/profile.php?id=100057214471784">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a className="header-info-icon">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a className="header-info-icon">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a className="header-info-icon">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a className="header-info-icon">
            <i class="fa-brands fa-tiktok"></i>
          </a>
        </div>
      </div>
      <div className="header-container">
        <a className="header-logo" href="/">
          <img className="header-logo-icon" src="https://shoeshop-youtube-zpunet.netlify.app/images/logo.png" alt="" />
        </a>
        <div className="header-search">
          <input type="text" className="header-search_input" placeholder="Search" />
          <button className="header-search_btn">Search</button>
        </div>
        <div className="header-user">
          {account ? (
            <div
              onClick={() => {
                setAccountFeatureBoard(!accountFeatureBoard);
              }}
              className="header-user_account-board"
            >
              Hi, shiro
              <i class="header-user_account-board-icon fa-solid fa-chevron-down"></i>
              <ul
                className={
                  accountFeatureBoard ? 'header-user_account-board-feature active' : 'header-user_account-board-feature'
                }
              >
                <Link className="header-user_account-board-feature-profile" to="/Profile">
                  Profile
                </Link>
                <Link
                  onClick={() => {
                    setAccount(!account);
                  }}
                  className="header-user_account-board-feature-logout"
                  to="/#"
                >
                  Logout
                </Link>
              </ul>
            </div>
          ) : (
            <div className="header-user_account">
              <Link className="header-user_account-register" to="/Register">
                REGISTER
              </Link>
              <Link className="header-user_account-login" to="/Login">
                LOGIN
              </Link>
            </div>
          )}
          <a className="header-user_cart">
            <i class="header-user_cart-icon fa-solid fa-cart-shopping">
              <span className="header-user_cart-badge">3</span>
            </i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
