import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import DetailsTemplate from "./index.jsx";
import Header from "../../molecules/Header/index.jsx";
import Characters from "../../organisms/Characters/index.jsx";

vi.mock("../../molecules/Header/index.jsx", () => ({
  default: vi.fn(() => <div>Headers</div>),
}));

vi.mock("../../organisms/Characters/index.jsx", () => ({
  default: vi.fn(() => <div>Characters</div>),
}));

describe("Details Template", async () => {
  it("Rendered", async () => {
    const { unmount } = await render(<DetailsTemplate />);
    expect(Header).toHaveBeenCalled();
    expect(Characters).toHaveBeenCalled();
    unmount();
  });
});
