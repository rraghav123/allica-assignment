import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./index.jsx";
import { BrowserRouter } from "react-router-dom";
import { userEvent } from "@testing-library/user-event";

const mockedUseNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actualRouter = await vi.importActual("react-router-dom");
  return {
    ...actualRouter,
    useNavigate: () => mockedUseNavigate,
  };
});

describe("Header Component", () => {
  afterEach(() => {
    mockedUseNavigate.mockClear();
  });
  it("renders", () => {
    const { unmount } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const loaderImage = screen.getByRole("img");

    expect(loaderImage).toBeInTheDocument();
    unmount();
  });

  it("if showBack is false back button should not get rendered", async () => {
    const { unmount } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(screen.queryByTestId("header-back-button")).toBeNull();

    unmount();
  });

  it("on click on back button trigger navigateBack", async () => {
    const { unmount } = render(
      <BrowserRouter>
        <Header showBack />
      </BrowserRouter>,
    );

    const backBtn = screen.getByTestId("header-back-button");

    await userEvent.click(backBtn);

    expect(mockedUseNavigate).toBeCalled();
    unmount();
  });
});
