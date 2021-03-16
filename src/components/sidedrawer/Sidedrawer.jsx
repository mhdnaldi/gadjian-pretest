import React from "react";
import "./sidedrawer.css";
import calendar from "../../assets/calendar.png";
import home from "../../assets/home.png";
import group from "../../assets/group.png";

const Backdrop = React.lazy(() => import("../backdrop/Backdrop"));
const sidedrawer = (props) => {
  let style = ["sidedrawer"];
  if (props.styleName) {
    style.push("sidedrawer-open");
  } else {
    style.push("sidedrawer-close");
  }
  return (
    <React.Fragment>
      <div className={style.join(" ")} onClick={props.close}>
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
      <React.Suspense fallback={<p></p>}>
        {style.join(" ") === "sidedrawer sidedrawer-open" && <Backdrop />}
      </React.Suspense>
    </React.Fragment>
  );
};

export default sidedrawer;
