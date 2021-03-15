import React from "react";
import "./cardList.css";
import Card from "./card/Card";

const cardList = (props) => {
  return (
    <div className='card-list'>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default cardList;
