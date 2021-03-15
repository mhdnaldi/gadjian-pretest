import React from "react";
import "./header.css";
import logo from "../../assets/gadjian.png";

const header = (props) => {
  return (
    <div className='header'>
      <img src={logo} alt='gadjian' />
      <div className='header-profile'>
        <p>Hallo, </p> <span>Gadjian</span>
        <div className='header-img'>Photo</div>
      </div>
    </div>
  );
};

export default header;
