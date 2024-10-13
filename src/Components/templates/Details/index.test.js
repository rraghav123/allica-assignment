import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import DetailsTemplate from "./index.jsx";
import Header from "../../molecules/Header/index.jsx";
import Details from "../../organisms/Details/index.jsx";

vi.mock("../../molecules/Header/index.jsx", () => ({
  default: vi.fn(() => <div>Header</div>),
}));

vi.mock("../../organisms/Details/index.jsx", () => ({
  default: vi.fn(() => <div>Details</div>),
}));

describe("Details Template", async () => {
  it("Rendered", async () => {
    const { unmount } = await render(<DetailsTemplate />);
    expect(Header).toHaveBeenCalled();
    expect(Details).toHaveBeenCalled();
    unmount();
  });
});
