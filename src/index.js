import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import personnelReducer from "./store/reducers/personnel";
import { BrowserRouter } from "react-router-dom";
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const composeEnhancer =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  personnelReducer,
  composeEnhancer(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
