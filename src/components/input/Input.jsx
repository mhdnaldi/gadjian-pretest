import React from "react";
import "./input.css";
import search from "../../assets/search.png";

const input = (props) => {
  return (
    <div className='input'>
      <img src={search} alt='' />
      <input type='text' onChange={props.change} placeholder='Find Personnel' />
    </div>
  );
};

export default input;
