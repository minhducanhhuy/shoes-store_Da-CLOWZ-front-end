import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  return (
    <div className="Register">
      <div className="Register-board">
        <input type="text" placeholder="Username" className="Register-board_username" />
        <input type="email" placeholder="Email" className="Register-board_gmail" />
        <input type="password" placeholder="Password" className="Register-board_password" />
        <button type="submit" className="Register-board_btn">
          Register
        </button>
        <Link className="Register-login_account" to="/Login">
          I Have Account <span>Login</span>
        </Link>
      </div>
    </div>
  );
}

export default Register;
