import React from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Aside from "../../components/aside/Aside";

const Home = (props) => {
  return (
    <div>
      <Header />
      <div className='home-main'>
        <Aside />
        <div className='home-personnel-list'>MAIN</div>
      </div>
    </div>
  );
};

export default Home;
