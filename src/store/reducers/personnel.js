import * as actionTypes from "../actionTypes";

const initialState = {
  personnels: [],
  response: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        personnels: action.data,
        loading: false,
      };
    case actionTypes.FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
