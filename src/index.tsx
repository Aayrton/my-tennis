import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import PlayerDetails from "./components/PlayerDetails";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./components/Home";
import reportWebVitals from "./reportWebVitals";

import { getPlayers, getPlayer } from "./services/player";
import routes from "./routes";
import "./index.css";

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
