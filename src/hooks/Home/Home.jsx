import React, { useEffect, useState, lazy, Suspense } from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Aside from "../../components/aside/Aside";
import Input from "../../components/input/Input";
import Spinner from "../../components/spinner/Spinner";
import * as actions from "../../store/index.js";
import { connect } from "react-redux";
import SideDrawer from "../../components/sidedrawer/Sidedrawer";

const CardList = lazy(() => import("../../components/cardList/CardList"));
const Home = (props) => {
  let [showSideDrawer, setShowSideDrawer] = useState(false);
  let [page, setPage] = useState(1);
  const { fetchStart } = props;
  useEffect(() => {
    fetchStart(page);
  }, [fetchStart, page]);

  const findPersonnelHandler = (event) => {
    let searchFilter = props.personnels.filter((el) =>
      el.name.first.toLowerCase().includes(event.target.value.toLowerCase())
    );
    if (event.target.value === "") {
      fetchStart(page);
      return;
    } else {
      props.searchFilter(searchFilter);
    }
  };

  const nextPageHandler = () => {
    if (page === 1250) {
      return;
    }
    setPage((prevState) => prevState + 1);
  };

  const prevPageHandler = () => {
    if (page === 1) {
      return;
    }
    setPage((prevState) => prevState - 1);
  };

  const openSideDrawerHandler = () => {
    setShowSideDrawer(true);
  };

  const closeSideDrawerHandler = () => {
    setShowSideDrawer(false);
  };

  return (
    <React.Fragment>
      <SideDrawer
        styleName={showSideDrawer}
        close={() => closeSideDrawerHandler()}
      />
      <Header click={() => openSideDrawerHandler()} />
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
          {props.loading ? (
            <Spinner />
          ) : (
            <Suspense fallback={<p>Loading...</p>}>
              <CardList
                page={page}
                personnels={props.personnels}
                next={() => nextPageHandler()}
                previous={() => prevPageHandler()}
              />
            </Suspense>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    personnels: state.personnels,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStart: (page) => dispatch(actions.fetchStart(page)),
    searchFilter: (payload) => dispatch(actions.searchFilter(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
