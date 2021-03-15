import React from "react";
import "./aside.css";
import calendar from "../../assets/calendar.png";
import home from "../../assets/home.png";
import group from "../../assets/group.png";

const aside = (props) => {
  return (
    <div className='aside'>
      <div>
        <img src={home} alt='' />
        Beranda
      </div>
      <div>
        <img src={group} alt='' />
        Personnel List
      </div>
      <div>
        <img src={calendar} alt='' />
        Daily Attendace
      </div>
    </div>
  );
};
export default aside;
