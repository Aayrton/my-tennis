import React from "react";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary/index";
import Home from "./components/Home/index";
import PlayerDetails from "./components/PlayerDetails";
import { getPlayers, getPlayer } from "./services/player";

export default [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: getPlayers,
      },
      {
        path: "player/:playerId",
        element: <PlayerDetails />,
        loader: ({ params }: { params: any }) => {
          const parsedId = parseInt(params.playerId);
          return getPlayer(parsedId);
        },
      },
    ],
  },
];
