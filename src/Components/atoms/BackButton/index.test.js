import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useNavigate } from "react-router-dom";
import BackButton from "./index.jsx";
import "@testing-library/jest-dom/vitest";
import { userEvent } from "@testing-library/user-event";

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));

describe("BackButton Component", () => {
  it("renders the back button correctly", async () => {
    await render(<BackButton />);

    const backButton = screen.getByTestId("header-back-button");
    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveTextContent("«");
    expect(backButton).toHaveClass("text-6xl text-slate-300 cursor-pointer");
  });

  it("navigates back when the back button is clicked", async () => {
    const mockNavigate = vi.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(<BackButton />);

    const backButton = screen.getByTestId("header-back-button");

    await userEvent.click(backButton);

    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
