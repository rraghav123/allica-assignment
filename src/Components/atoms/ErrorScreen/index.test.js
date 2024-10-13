import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ErrorScreen from "./index.jsx";
import errorImage from "../../../assets/error.png";

import "@testing-library/jest-dom/vitest";
import { userEvent } from "@testing-library/user-event";

describe("ErrorScreen Component", () => {
  it("renders the error image and calls onRetry when clicked", async () => {
    const mockOnRetry = vi.fn();

    render(<ErrorScreen onRetry={mockOnRetry} />);

    const image = screen.getByAltText("error");
    expect(image).toBeInTheDocument();
    expect(image.src).toContain(errorImage);

    await userEvent.click(screen.getByTestId("error-screen"));

    expect(mockOnRetry).toHaveBeenCalledTimes(1);
  });

  it("renders without crashing when no onRetry prop is passed", () => {
    render(<ErrorScreen />);

    const image = screen.getByAltText("error");
    expect(image).toBeInTheDocument();

    fireEvent.click(image.closest("button"));
  });
});
