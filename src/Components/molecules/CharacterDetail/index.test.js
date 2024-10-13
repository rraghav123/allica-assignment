import { describe, expect, it, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import CharacterDetail from "./index.jsx";
import { userEvent } from "@testing-library/user-event";

describe("Character Detail Component", () => {
  let props;

  beforeEach(() => {
    props = {
      data: {
        gender: "Test gender",
        birth_year: "Test Birth Year",
      },
      id: 1,
    };
  });

  it("Character Details Component is Rendered", async () => {
    const { getByText, unmount } = render(<CharacterDetail {...props} />);

    expect(getByText(props.data.gender)).toBeInTheDocument();
    expect(getByText(props.data.birth_year)).toBeInTheDocument();

    unmount();
  });

  it("Test on click of edit button modal should be visible", async () => {
    const { unmount } = await render(<CharacterDetail {...props} />);

    const editBtn = screen.queryByTestId("character-details-edit-button");
    await userEvent.click(editBtn);

    expect(screen.queryByTestId("modelcules-editable-modal")).toBeVisible();

    unmount();
  });

  it("Test editable modal input initial state", async () => {
    const { unmount } = await render(<CharacterDetail {...props} />);

    const editBtn = screen.queryByTestId("character-details-edit-button");
    await userEvent.click(editBtn);

    const input = screen.queryByTestId("input-field");
    expect(input).toHaveValue(props.data.gender);

    unmount();
  });

  it("test when user edit input", async () => {
    const { unmount } = await render(<CharacterDetail {...props} />);

    const editBtn = screen.queryByTestId("character-details-edit-button");
    await userEvent.click(editBtn);

    const input = screen.queryByTestId("input-field");
    await userEvent.clear(input);
    await userEvent.type(input, "Female");
    expect(input).toHaveValue("Female");
    unmount();
  });

  it("test when user update gender", async () => {
    const { unmount } = await render(<CharacterDetail {...props} />);

    const editBtn = screen.queryByTestId("character-details-edit-button");
    await userEvent.click(editBtn);

    const input = screen.queryByTestId("input-field");
    await userEvent.clear(input);
    await userEvent.type(input, "Female");
    const btn = screen.queryByTestId("editable-modal-save-btn");
    await userEvent.click(btn);
    expect(screen.queryByTestId("character-detail-gender")).toHaveTextContent(
      "Female",
    );
    unmount();
  });

  it("on click on close modal should close", async () => {
    const { unmount } = await render(<CharacterDetail {...props} />);

    const editBtn = screen.queryByTestId("character-details-edit-button");
    await userEvent.click(editBtn);

    const closeBtn = screen.queryByTestId("editable-modal-close-btn");
    await userEvent.click(closeBtn);
    expect(screen.queryByTestId("modelcules-editable-modal")).toBeNull();
    unmount();
  });

  it("on empty input value save btn should be disabled", async () => {
    const { unmount } = await render(<CharacterDetail {...props} />);

    const editBtn = screen.queryByTestId("character-details-edit-button");
    await userEvent.click(editBtn);

    const input = screen.queryByTestId("input-field");
    await userEvent.clear(input);

    const btn = screen.queryByTestId("editable-modal-save-btn");

    expect(btn).toHaveClass("opacity-50");
    unmount();
  });
});
