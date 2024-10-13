import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "./index.jsx";

describe("Loader Component", () => {
  it("renders", () => {
    const { unmount } = render(<Loader />);

    const loaderImage = screen.getByRole("img");

    expect(loaderImage).toBeInTheDocument();
    unmount();
  });
});
