import React from "react";
import { screen } from "@testing-library/react";

import Header from "../../components/Header";

import { renderWithRouter } from "../../utils/renderWithRouter";

describe("Header", () => {
  it("should render without crashing", () => {
    renderWithRouter(<Header />);
    const title = screen.getByText(/EuroTennis/i);
    expect(title).toBeInTheDocument();
  });
});
