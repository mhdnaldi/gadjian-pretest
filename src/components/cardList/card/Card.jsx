import React from "react";
import "./card.css";
import dots from "../../../assets/ellipsis.png";

import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const card = (props) => {
  return (
    <LazyLoadComponent>
      <div className='card'>
        <div className='card-id'>
          <div>
            <p>Personnel ID:</p>
            <strong>{props.id === null ? "" : props.id.slice(0, 6)}</strong>
          </div>
          <img src={dots} alt='' />
        </div>
        <div className='card-img'>
          <LazyLoadImage
            effect='blur'
            className='card-img'
            src={props.picture}
            alt=''
          />
        </div>
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
    </LazyLoadComponent>
  );
};
export default card;
