import React from "react";
import { render, screen } from "@testing-library/react";

import ContentLoader from "../../components/ContentLoader/index";

describe("ContentLoader", () => {
  it("should render without crashing", () => {
    render(<ContentLoader />);
    const loader = screen.getByTestId(/content-loader/i);

    expect(loader).toBeInTheDocument();
  });
});
