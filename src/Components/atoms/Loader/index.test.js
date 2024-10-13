import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // For custom matchers like toBeInTheDocument and toHaveAttribute
import Loader from "./index.jsx"; // Adjust the path to your Loader component

describe("Loader Component", () => {
  it("renders", () => {
    const { unmount } = render(<Loader />);

    const loaderImage = screen.getByRole("img");

    expect(loaderImage).toBeInTheDocument();
    unmount();
  });
});
