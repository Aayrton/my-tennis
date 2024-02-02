import React from "react";
import { BrowserRouter } from "react-router-dom";
import PlayerCard from "../../components/PlayerCard";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithRouter } from "../../utils/renderWithRouter";

describe("PlayerCard", () => {
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

  it("should render without crashing", () => {
    renderWithRouter(<PlayerCard player={player} />);
    const playerName = screen.getByText(/Novak Djokovic/i);
    const rank = screen.getByText(/Rank: 2/i);

    expect(playerName).toBeInTheDocument();
    expect(rank).toBeInTheDocument();
  });

  it("should navigate to player details when clicking on the link", () => {
    renderWithRouter(
      {
        element: <PlayerCard player={player} />,
        path: "/",
      },
      [{ path: "player/:playerId", element: <div>detail</div> }]
    );

    const link = screen.getByRole("link");
    fireEvent.click(link);

    expect(screen.getByText(/detail/i)).toBeInTheDocument();
  });
});
