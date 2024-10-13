import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import CharacterDetailsItem from "./index.jsx";

describe("CharacterDetailsItemComponent", async () => {
  it("should render Label and Value with value Test Label and Test Value when provided", async () => {
    const props = {
      label: "Test Label",
      value: "Test Value",
      isLoading: false,
    };
    const component = await render(<CharacterDetailsItem {...props} />);
    expect(screen.queryByTestId("label")).toHaveTextContent(props.label);
    expect(screen.queryByTestId("value")).toHaveTextContent(props.value);
    expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
    component.unmount();
  });

  it("should render Loader component when isLoading Props is provided", async () => {
    const props = {
      label: "Test Label",
      isLoading: true,
    };
    const component = await render(<CharacterDetailsItem {...props} />);
    expect(screen.queryByTestId("loader")).toBeVisible();
    expect(screen.queryByTestId("value")).not.toBeInTheDocument();
    component.unmount();
  });
});
