import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="login">
      <div className="login-board">
        <input type="email" placeholder="Email" className="login-board_gmail" />
        <input type="password" placeholder="Password" className="login-board_password" />
        <button type="submit" className="login-board_btn">
          LOGIN
        </button>
        <Link className="login-create_account" to="/Register">
          Create Account
        </Link>
      </div>
    </div>
  );
}

export default Login;
