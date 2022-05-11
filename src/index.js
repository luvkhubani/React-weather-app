import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// This is imp to run react. Syntax - ReactDOM.render(what to render, where to render));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
