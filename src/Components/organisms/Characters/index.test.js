import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import {
  useGetCharacterDetails,
  useGetCharactersList,
} from "../../../generalQuery.js";

import { mockResponseCharacters } from "../../../test/mockData.js";

import Characters from "./index.jsx";
import Character from "../../molecules/Character/index.jsx";
import ErrorScreen from "../../atoms/ErrorScreen/index.jsx";
import { useLocation } from "react-router-dom";
import Details from "../Details/index.jsx";

vi.mock("../../../generalQuery.js", () => ({
  useGetCharactersList: vi.fn(),
}));

vi.mock("../../atoms/Loader/index.jsx", () => ({
  default: () => <div data-testid="loader">Loading...</div>,
}));

vi.mock("../../molecules/Character/index.jsx", () => ({
  default: vi.fn(() => <div data-testid="character-details-item" />),
}));

vi.mock("../../atoms/ErrorScreen", () => ({
  default: vi.fn(() => <div data-testid="error-screen" />),
}));

describe("Characters Component", async () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the loader when data is loading", async () => {
    useGetCharactersList.mockReturnValue({
      isLoading: true,
      data: null,
    });

    const { unmount } = await render(<Characters />);

    expect(screen.queryByTestId("loader")).toBeVisible();

    unmount();
  });

  it("renders loader when data is reFetching", async () => {
    useGetCharactersList.mockReturnValue({
      data: null,
      isLoading: false,
      isRefetching: true,
    });

    const { unmount } = await render(<Characters />);

    expect(screen.getByTestId("loader")).toBeVisible();

    unmount();
  });

  it("renders error screen if API fails", async () => {
    const refetch = vi.fn();

    useGetCharactersList.mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
      refetch,
    });

    const { unmount } = render(<Characters />);

    expect(ErrorScreen).toHaveBeenCalledWith(
      expect.objectContaining({
        onRetry: refetch,
      }),
      {},
    );

    unmount();
  });

  it("retry fxn is passed to ErrorScreen component", async () => {
    useGetCharactersList.mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
    });

    const { unmount } = render(<Characters />);

    expect(screen.getByTestId("error-screen")).toBeVisible(); // Check if the loader is visible

    unmount();
  });

  it("Characters component should render character component", async () => {
    useGetCharactersList.mockReturnValue({
      isLoading: false,
      data: mockResponseCharacters,
    });

    const { unmount } = await render(<Characters />);
    expect(Character).toHaveBeenCalledTimes(
      mockResponseCharacters.results.length,
    );
    mockResponseCharacters.results.forEach((character, index) => {
      expect(Character).toHaveBeenCalledWith(
        expect.objectContaining({
          id: index + 1,
          data: expect.objectContaining({
            name: character.name,
          }),
        }),
        {},
      );
    });

    unmount();
  });

  it("renders nothing when there are no characters", () => {
    useGetCharactersList.mockReturnValue({
      isLoading: false,
      data: { results: [] },
    });

    render(<Characters />);

    expect(screen.queryByTestId("character-details-item")).toBeNull(); // Assert that no Character component is rendered
  });
});
