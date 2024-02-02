import React from "react";
import { Outlet, Link } from "react-router-dom";

import Home from "./components/Home";

import "./App.scss";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Main">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
