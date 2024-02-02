import React from "react";
import { BrowserRouter } from "react-router-dom";
import { screen, waitFor, render } from "@testing-library/react";

import ScoresTable from "../../components/ScoresTable";

describe("ScoresTable", () => {
  const scores = [1, 2, 1, 1, 0];
  it("should render without crashing", async () => {
    render(<ScoresTable scores={[1, 2, 1, 1, 0]} />);

    const matchHeader = screen.getByText("Match");
    const scoreHeaders = scores.map((score, index) =>
      screen.getByText(`Match ${index + 1}`)
    );

    expect(matchHeader).toBeInTheDocument();
    scoreHeaders.forEach((header) => {
      expect(header).toBeInTheDocument();
    });
  });
});
