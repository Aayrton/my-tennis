import React from "react";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, screen, waitFor } from "@testing-library/react";

import { renderWithRouter } from "../../utils/renderWithRouter";

import PlayerDetails from "../../components/PlayerDetails/";

describe("PlayerDetails", () => {
  const player = {
    id: 52,
    firstname: "Novak",
    lastname: "Djokovic",
    shortname: "N.DJO",
    rank: 2,
    sex: "M",
    country: {
      picture: "https://i.eurosport.com/_iss_/geo/country/flag/medium/6944.png",
      code: "SRB",
    },
    picture:
      "https://i.eurosport.com/_iss_/person/pp_clubteam/large/565920.jpg",
    data: {
      rank: 2,
      points: 2542,
      weight: 80000,
      height: 188,
      age: 31,
      last: [1, 1, 1, 1, 1],
    },
  };

  it("should render without crashing", async () => {
    renderWithRouter({
      element: <PlayerDetails />,
      path: "/",
      loader: () => player,
    });

    await waitFor(() => {
      const playerName = screen.getByText(/Novak Djokovic/i);
      const shortname = screen.getByText(/N.DJO/i);

      expect(playerName).toBeInTheDocument();
      expect(shortname).toBeInTheDocument();
    });
  });
});
