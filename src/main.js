import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import Routes from "./routes";

import App from "./components/App";

ReactDOM.render(
      <BrowserRouter>
        <div>
          <Routes />
          <App />
        </div>
      </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
