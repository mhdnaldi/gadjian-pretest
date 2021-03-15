import React from "react";
import "./cardList.css";
import Card from "./card/Card";

const cardList = (props) => {
  let card = null;
  if (props.personnels) {
    card = props.personnels.map((el, i) => {
      let date = new Date(el.dob.date);
      let dd = date.getDate();
      let mm = date.getMonth() + 1;
      let updatedDate = `${dd} - ${mm}`;

      return (
        <Card
          key={i}
          id={el.id.value}
          email={el.email}
          fname={el.name.first}
          lname={el.name.last}
          phone={el.phone}
          picture={el.picture.large}
          birthday={updatedDate}
        />
      );
    });
  }
  return (
    <React.Fragment>
      <div className='card-list'>{card}</div>
      <div className='pagination'>
        <div className='prev' onClick={props.previous}>
          <div>{"<"}</div>Previous Page
        </div>
        <div className='next' onClick={props.next}>
          <div>{">"}</div>Next Page
        </div>
      </div>
    </React.Fragment>
  );
};

export default cardList;
