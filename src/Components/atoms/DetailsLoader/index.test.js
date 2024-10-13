import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import Loader from "./index.jsx";

describe("DetailsLoader", () => {
  it("Rendered", async () => {
    const { unmount } = render(<Loader />);
    expect(screen.queryByTestId("atom-loader-img")).toBeVisible();
    unmount();
  });
});
