import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

import CharacterDetails from "./index.jsx";

describe("CharacterDetails Component", () => {
  it("renders the label and value correctly", async () => {
    const label = "Test Label";
    const value = "Test Value";
    const component = await render(
      <CharacterDetails label={label} value={value} />,
    );

    const labelElement = screen.queryByTestId("label");
    const valueElement = screen.queryByTestId("value");

    expect(labelElement).toHaveTextContent(label);
    expect(valueElement).toHaveTextContent(value);

    component.unmount();
  });

  it("renders with a custom valueTestId", () => {
    const label = "Age";
    const value = "30";
    const customTestId = "custom-value";
    render(
      <CharacterDetails
        label={label}
        value={value}
        valueTestId={customTestId}
      />,
    );

    const valueElement = screen.queryByTestId(customTestId);

    expect(valueElement).toHaveTextContent(value);
  });

  it("renders with default valueTestId when not provided", () => {
    const label = "Gender";
    const value = "Male";
    render(<CharacterDetails label={label} value={value} />);

    const valueElement = screen.queryByTestId("value");

    expect(valueElement).toHaveTextContent(value);
  });

  it("renders empty values correctly", () => {
    const label = "";
    const value = "";
    render(<CharacterDetails label={label} value={value} />);

    const labelElement = screen.queryByTestId("label");
    const valueElement = screen.queryByTestId("value");

    expect(labelElement).toHaveTextContent("");
    expect(valueElement).toHaveTextContent("");
  });
});
