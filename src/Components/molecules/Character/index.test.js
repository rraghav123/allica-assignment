import { describe, expect, it, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import Character from "./index.jsx";
import { userEvent } from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

const mockedUseNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actualRouter = await vi.importActual("react-router-dom");
  return {
    ...actualRouter,
    useNavigate: () => mockedUseNavigate,
  };
});

describe("Character Component", async () => {
  afterEach(() => {
    // Clear mock calls after each test
    mockedUseNavigate.mockClear();
  });
  it("Character Component is Rendered", async () => {
    const props = {
      data: {
        name: "Test name",
        gender: "Test gender",
        birth_year: "Test Birth Year",
      },
      id: 1,
    };
    const { getByText, unmount } = render(
      <BrowserRouter>
        <Character {...props} />
      </BrowserRouter>,
    );
    expect(getByText("Test name")).toBeInTheDocument();
    expect(getByText("Test gender")).toBeInTheDocument();
    expect(getByText("Test Birth Year")).toBeInTheDocument();
    unmount();
  });

  it("navigate to be called on click on Card", async () => {
    const props = {
      data: {
        name: "Test name",
        gender: "Test gender",
        birth_year: "Test Birth Year",
      },
      id: 1,
    };

    const { unmount } = render(
      <BrowserRouter>
        <Character {...props} />
      </BrowserRouter>,
    );

    const link = screen.getByTestId("molecules-character");

    await userEvent.click(link);

    expect(mockedUseNavigate).toHaveBeenCalledWith(
      expect.stringContaining("details"),
      expect.objectContaining({
        state: expect.objectContaining({
          id: 1,
        }),
      }),
    );

    unmount();
  });
});
