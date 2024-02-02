import React from "react";
import { Outlet, Link } from "react-router-dom";

import Home from "./components/Home";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">EuroStat</Link>
      </header>
      <div id="main">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
