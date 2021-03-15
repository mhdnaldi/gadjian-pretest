import React from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Aside from "../../components/aside/Aside";
import Input from "../../components/input/Input";

const Home = (props) => {
  const findPersonnelHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <Header />
      <div className='home-main'>
        <Aside />
        <div className='home-personnel-list'>
          <div className='personnel-list-header'>
            <div>
              <h2>PERSONNEL LIST</h2>
              <p>List of all personnels</p>
            </div>
            <div className='utility'>
              <Input change={(event) => findPersonnelHandler(event)} />
              <div className='add-personnel-btn'>
                <h4>ADD PERSONNEL</h4>
                <div className='plus'>+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
