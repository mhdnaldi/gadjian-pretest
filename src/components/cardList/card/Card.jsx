import React from "react";
import "./card.css";
import dots from "../../../assets/ellipsis.png";

const card = (props) => {
  return (
    <div className='card'>
      <div className='card-id'>
        <div>
          <p>Personnel ID:</p>
          <strong>123456</strong>
        </div>
        <img src={dots} alt='' />
      </div>
      <div className='card-img'>Photo</div>
      <div>
        <strong>Name</strong>
        <p>Muhammad Naldi</p>
      </div>
      <div>
        <strong>Telephone</strong>
        <p>081269935503</p>
      </div>
      <div>
        <strong>Birthday</strong>
        <p>20 Mei 1997</p>
      </div>
      <div>
        <strong>Email</strong>
        <p>mhd.naldi@yahoo.com</p>
      </div>
    </div>
  );
};
export default card;
