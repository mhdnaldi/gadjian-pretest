import React, { useEffect, useState } from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Aside from "../../components/aside/Aside";
import Input from "../../components/input/Input";
import CardList from "../../components/cardList/CardList";

import * as actions from "../../store/index.js";
import { connect } from "react-redux";

const Home = (props) => {
  let [page, setPage] = useState(1);
  const { fetchStart } = props;
  useEffect(() => {
    fetchStart(page);
  }, [fetchStart, page]);

  const findPersonnelHandler = (event) => {
    console.log(event.target.value);
  };

  const nextPageHandler = () => {
    let newPage = page++;
    setPage(newPage);
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
          <CardList
            personnels={props.personnels}
            next={() => nextPageHandler()}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    personnels: state.personnels,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStart: (page) => dispatch(actions.fetchStart(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
