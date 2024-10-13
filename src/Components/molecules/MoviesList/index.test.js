import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import MoviesList from "./index.jsx";
import { useGetFilms } from "../../../generalQuery.js";
import {
  moviesList,
  mockResponseMoviesApi,
  errorMockResponseMoviesApi,
} from "../../../test/mockData.js";

import "@testing-library/jest-dom";

const normalizeData = vi.fn();

vi.mock("../../../generalQuery.js", () => ({
  useGetFilms: vi.fn(),
}));

vi.mock("../../atoms/DetailsLoader/index.jsx", () => ({
  default: () => <div data-testid="details-loader">Loading...</div>,
}));

describe("MoviesList Component", async () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the loader when data is loading", async () => {
    normalizeData.mockReturnValue({ isLoading: true, data: [] });
    useGetFilms.mockReturnValue([{ isLoading: true }]);

    const { unmount } = await render(<MoviesList films={moviesList} />);

    expect(screen.getByTestId("details-loader")).toBeVisible();

    unmount();
  });

  it("renders the list of movies when data is available", async () => {
    useGetFilms.mockReturnValue(mockResponseMoviesApi);

    // Mock the normalized data
    normalizeData.mockReturnValue({
      isLoading: false,
      data: mockResponseMoviesApi.map((movie) => movie.data),
    });

    const { unmount } = await render(<MoviesList films={moviesList} />);

    mockResponseMoviesApi.forEach((movie) => {
      expect(screen.getByText(movie.data.title)).toBeInTheDocument();
    });

    unmount();
  });

  it("renders the list of movies when out 3 out of 1 api failed", async () => {
    useGetFilms.mockReturnValue(errorMockResponseMoviesApi);

    // Mock the normalized data
    normalizeData.mockReturnValue({
      isLoading: false,
      data: errorMockResponseMoviesApi.filter((movie) => movie.data),
    });

    const { unmount } = await render(<MoviesList films={moviesList} />);

    errorMockResponseMoviesApi.forEach((movie) => {
      if (movie.data) {
        expect(screen.getByText(movie.data.title)).toBeInTheDocument();
      }
    });

    unmount();
  });

  it("renders the list of movies when out 3 out of 1 api failed", async () => {
    useGetFilms.mockReturnValue(errorMockResponseMoviesApi);

    // Mock the normalized data
    normalizeData.mockReturnValue({
      isLoading: false,
      data: errorMockResponseMoviesApi.filter((movie) => movie.data),
    });

    const { unmount } = await render(<MoviesList films={moviesList} />);

    errorMockResponseMoviesApi.forEach((movie) => {
      if (movie.data) {
        expect(screen.getByText(movie.data.title)).toBeInTheDocument();
      }
    });

    unmount();
  });

  it("handles the case where no movies are passed", async () => {
    useGetFilms.mockReturnValue([]);

    // Mock the normalized data
    normalizeData.mockReturnValue({
      isLoading: false,
      data: [],
    });

    const { unmount } = await render(<MoviesList films={[]} />);
    expect(screen.queryByTestId("molecules-moviesList-ol")).toBeNull();

    unmount();
  });
});
