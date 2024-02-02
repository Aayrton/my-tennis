import React from "react";
import { screen, waitFor } from "@testing-library/react";

import { renderWithRouter } from "../../utils/renderWithRouter";
import App from "../../App";
import ErrorBoundary from "../../components/ErrorBoundary/index";

describe("ErrorBoundary", () => {
  it("should display an error page with the error message", async () => {
    renderWithRouter({
      element: <App />,
      errorElement: <ErrorBoundary />,
      path: "/",
      loader: () => {
        throw new Error("Failed loading players");
      },
    });

    await waitFor(() => {
      const errorMessage = screen.getByText(/Failed loading players/i);

      expect(errorMessage).toBeInTheDocument();
    });
  });
});
