import axios from "axios";
import * as actionTypes from "../actionTypes";

export const fetchStart = (page) => {
  console.log(page);
  return (dispatch) => {
    dispatch(fetchPending());
    axios
      .get(`https://randomuser.me/api/?page=${page}&results=4&seed=abc`)
      .then((res) => {
        dispatch(fetchSuccess(res.data.results));
      })
      .catch((err) => {
        dispatch(fetchFailed(err.response));
      });
  };
};

export const fetchPending = () => {
  return {
    type: actionTypes.FETCH_PENDING,
  };
};

export const fetchSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    data: payload,
  };
};

export const fetchFailed = (error) => {
  return {
    type: actionTypes.FETCH_FAILED,
    error,
  };
};
export const searchFilter = (data) => {
  console.log(data);
  return {
    type: actionTypes.SEARCH_FILTER,
    data,
  };
};
