import React from "react";
import "./card.css";
import dots from "../../../assets/ellipsis.png";

const card = (props) => {
  return (
    <div className='card'>
      <div className='card-id'>
        <div>
          <p>Personnel ID:</p>
          <strong>{props.id}</strong>
        </div>
        <img src={dots} alt='' />
      </div>
      <img className='card-img' src={props.picture} alt='' />
      <div>
        <strong>Name</strong>
        <p>
          {props.fname} {props.lname}
        </p>
      </div>
      <div>
        <strong>Telephone</strong>
        <p>{props.phone}</p>
      </div>
      <div>
        <strong>Birthday</strong>
        <p>{props.birthday}</p>
      </div>
      <div>
        <strong>Email</strong>
        <p>{props.email}</p>
      </div>
    </div>
  );
};
export default card;
