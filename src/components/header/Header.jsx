import React from "react";
import "./header.css";
import logo from "../../assets/gadjian.png";
import burgerMenu from "../../assets/burgermenu.png";

const header = (props) => {
  return (
    <div className='header'>
      <div>
        <img className='burger-menu' src={burgerMenu} alt='' />
        <img src={logo} alt='gadjian' />
      </div>
      <div className='header-profile'>
        <p>Hallo, </p> <span>Gadjian</span>
        <div className='header-img'>Photo</div>
      </div>
    </div>
  );
};

export default header;
