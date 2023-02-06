import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import "tachyons";

import App from "./containers/App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { requestRobots, searchRobots } from "./reducers";

import "./index.css";

import reportWebVitals from "./reportWebVitals";

const logger = createLogger();
const rootReducers = combineReducers({ requestRobots, searchRobots });
const middleWares = [thunkMiddleware, logger];

const store = configureStore({
  reducer: rootReducers,
  middleware: middleWares,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
