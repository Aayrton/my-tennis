import React from "react";
import { screen } from "@testing-library/react";

import App from "../../App";
import { renderWithRouter } from "../../utils/renderWithRouter";

it("should render without crashing", () => {
  renderWithRouter(<App />);
  const title = screen.getByText(/EuroStat/i);
  expect(title).toBeInTheDocument();
});
