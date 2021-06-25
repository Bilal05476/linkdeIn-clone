import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";
import { BrowserRouter as Router } from "react-router-dom";
// import Image from "./Image";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <Router>
      <App />
    </Router>
  </StateProvider>,
  document.getElementById("root")
);
reportWebVitals();
