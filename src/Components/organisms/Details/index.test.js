import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useLocation } from "react-router-dom";
import { useGetCharacterDetails } from "../../../generalQuery.js";
import "@testing-library/jest-dom";
import { mockResponseDetailsPage } from "../../../test/mockData.js";
import { STATICS } from "../Characters/Statics.js";

import CharacterDetailsItem from "../../atoms/CharacterDetailsItem";
import HomePlanet from "../../molecules/HomePlanet/index.jsx";
import MoviesList from "../../molecules/MoviesList/index.jsx";

import Details from "./index.jsx";

vi.mock("react-router-dom", () => ({
  useLocation: vi.fn(),
}));

vi.mock("../../../generalQuery.js", () => ({
  useGetCharacterDetails: vi.fn(),
}));

vi.mock("../../atoms/Loader/index.jsx", () => ({
  default: vi.fn(() => <div data-testid="loader">Loading...</div>),
}));

vi.mock("../../atoms/CharacterDetailsItem", () => ({
  default: vi.fn(() => <div data-testid="character-details-item" />),
}));
vi.mock("../../molecules/HomePlanet/index.jsx", () => ({
  default: vi.fn(() => <div data-testid="character-home-planet-item" />),
}));
vi.mock("../../molecules/MoviesList/index.jsx", () => ({
  default: vi.fn(() => <div data-testid="character-movies-list-item" />),
}));

describe("Details Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders loader when data is loading", async () => {
    useLocation.mockReturnValue({ state: { id: 1 } });
    useGetCharacterDetails.mockReturnValue({
      data: null,
      isLoading: true,
    });

    const { unmount } = render(<Details />);

    expect(screen.getByTestId("loader")).toBeVisible(); // Check if the loader is visible

    unmount();
  });

  it("renders character details when data is available", async () => {
    useLocation.mockReturnValue({ state: { id: 1 } });
    useGetCharacterDetails.mockReturnValue({
      data: mockResponseDetailsPage,
      isLoading: false,
    });

    const { unmount } = render(<Details />);
    STATICS.DATA_TO_SHOW.forEach(({ label, key }) => {
      expect(CharacterDetailsItem).toHaveBeenCalledWith(
        expect.objectContaining({
          label: label,
          value: mockResponseDetailsPage[key],
        }),
        {},
      );
    });

    unmount();
  });

  it("renders HomePlanet when correct Props", async () => {
    useLocation.mockReturnValue({ state: { id: 1 } });
    useGetCharacterDetails.mockReturnValue({
      data: mockResponseDetailsPage,
      isLoading: false,
    });

    const { unmount } = render(<Details />);

    expect(HomePlanet).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 1,
      }),
      {},
    );

    unmount();
  });

  it("renders MovieList when correct Props", async () => {
    useLocation.mockReturnValue({ state: { id: 1 } });
    useGetCharacterDetails.mockReturnValue({
      data: mockResponseDetailsPage,
      isLoading: false,
    });

    const { unmount } = render(<Details />);

    expect(MoviesList).toHaveBeenCalledWith(
      expect.objectContaining({
        films: expect.arrayContaining(mockResponseDetailsPage.films),
      }),
      {},
    );

    unmount();
  });
});
