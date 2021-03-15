import axios from "axios";
import * as actionTypes from "../actionTypes";

export const fetchStart = (page) => {
  return (dispatch) => {
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
