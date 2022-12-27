import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';

function Navbar() {
  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links__logo">
            <img src={logo} alt="logo"/>
        </div>
        <div className="gpt3__navbar-links__items">
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="#openai">Open AI</a></p>
            <p><a href="#cstudies">Case studies</a></p>
            <p><a href="#lib">Library</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar;
