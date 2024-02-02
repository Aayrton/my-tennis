import React from "react";
import { screen, waitFor } from "@testing-library/react";
import Home from "../../components/Home";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { renderWithRouter } from "../../utils/renderWithRouter";
import mockPlayers from "../../testsMocks/mocksPlayers";

describe("Home", () => {
  it("should render the loader", async () => {
    renderWithRouter({ element: <Home />, path: "/", loader: () => [] });

    await waitFor(() => {
      const loader = screen.getByTestId(/content-loader/i);
      expect(loader).toBeInTheDocument();
    });
  });

  it("should render the players cards", async () => {
    renderWithRouter({
      element: <Home />,
      path: "/",
      loader: () => mockPlayers,
    });

    await waitFor(() => {
      const versus = screen.getByText(/VS/i);
      expect(versus).toBeInTheDocument();
    });
  });
});
