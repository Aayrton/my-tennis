import React from "react";
import { render, screen } from "@testing-library/react";
import InfoField from "../../components/InfoField/index";

describe("InfoField", () => {
  it("should renders label and value correctly", () => {
    const label = "Test Label";
    const value = "Test Value";

    render(<InfoField label={label} value={value} />);

    expect(screen.getByText(`${label}:`)).toBeInTheDocument();
    expect(screen.getByText(value)).toBeInTheDocument();
  });

  it("should renders JSX element as value", () => {
    const label = "Test JSX Label";
    const jsxElement = <span>JSX Element</span>;

    render(<InfoField label={label} value={jsxElement} />);

    expect(screen.getByText(`${label}:`)).toBeInTheDocument();
    expect(screen.getByText("JSX Element")).toBeInTheDocument();
  });
});
