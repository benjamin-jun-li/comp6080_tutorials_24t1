import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("presentation-card", () => {
    it("renders the card", () => {
        render(<Card />);
        expect(screen.getByText("count is 0")).toBeInTheDocument();
    }),
    it("click the card navigates to the details page", async () => {
        render(<Card />);
        const card = screen.getByRole("card");
        await card.click();
        expect(screen.getByText("count is 1")).toBeInTheDocument();
    })
});
