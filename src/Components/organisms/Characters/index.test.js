import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Characters from "./index.jsx";
import { useGetCharactersList } from "../../../generalQuery.js";

import { mockResponseCharacters } from "../../../test/mockData.js";

import "@testing-library/jest-dom";
import Character from "../../molecules/Character/index.jsx";

vi.mock("../../../generalQuery.js", () => ({
  useGetCharactersList: vi.fn(),
}));

vi.mock("../../atoms/Loader/index.jsx", () => ({
  default: () => <div data-testid="loader">Loading...</div>,
}));

vi.mock("../../molecules/Character/index.jsx", () => ({
  default: vi.fn(() => <div data-testid="character-details-item" />),
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
