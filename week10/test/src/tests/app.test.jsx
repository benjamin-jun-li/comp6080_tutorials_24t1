import App from "../App";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);
    expect(screen.getByText("count is 0")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  }),
  it("increments the count when the button is clicked", async () => {
    render(<App />);
    const button = screen.getByRole("button");
    await button.click();
    expect(screen.getByText("count is 1")).toBeInTheDocument();
  });
});

