import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import InputField from "./index.jsx";
import { userEvent } from "@testing-library/user-event";

describe("Test InputField", async () => {
  it("should render Label and input Value", async () => {
    const props = {
      label: "Test Label",
      value: "Test Value",
    };
    const component = await render(<InputField {...props} />);
    expect(screen.queryByTestId("input-label")).toHaveTextContent(props.label);
    expect(screen.queryByTestId("input-field")).toHaveValue(props.value);
    component.unmount();
  });

  it("should fire onChange event for input", async () => {
    const onChange = vi.fn();
    const props = {
      label: "Test Label",
      value: "",
      onChange,
    };
    const user = userEvent.setup();

    const component = await render(<InputField {...props} />);
    const inputBox = screen.queryByTestId("input-field");
    await user.type(inputBox, "1");
    expect(onChange).toBeCalledWith("1");
    component.unmount();
  });

  it("should fire onChange 5 times", async () => {
    const onChange = vi.fn();
    const props = {
      label: "Test Label",
      value: "",
      onChange,
    };
    const user = userEvent.setup();

    const component = await render(<InputField {...props} />);
    const inputBox = screen.queryByTestId("input-field");
    await user.type(inputBox, "Hello");
    expect(onChange).toBeCalledTimes(5);
    component.unmount();
  });

  it("onChange should not be called max length", async () => {
    const onChange = vi.fn();
    const props = {
      label: "Test Label",
      value: "hello",
      maxLength: 5,
      onChange,
    };
    const user = userEvent.setup();

    const component = await render(<InputField {...props} />);
    const inputBox = screen.queryByTestId("input-field");
    await user.type(inputBox, "Hello");
    expect(onChange).toBeCalledTimes(0);
    component.unmount();
  });
});
