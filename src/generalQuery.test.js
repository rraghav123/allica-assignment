import {
  useGetCharactersList,
  useGetCharacterHomePlanet,
  useGetCharacterDetails,
  useGetCharacterFilms,
} from "./generalQuery.js";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { queryClient } from "./providers/ReactQueryProvider.js";
import { makeApiGetCall } from "./utils/index.js";
import { URLS } from "./config/urlConfig.js";
import { renderHook } from "@testing-library/react-hooks";
import { QueryClientProvider } from "@tanstack/react-query";

import {
  mockResponsePlanetApi,
  mockResponseDetailsPage,
  moviesList,
} from "./test/mockData.js";

vi.mock(
  "./utils/index.js",
  vi.fn(() => ({
    makeApiGetCall: vi.fn(() => {}),
  })),
);

describe("generalQuery", () => {
  beforeEach(() => {
    queryClient.clear(); // Clear query client before each test
  });
  describe("useGetCharactersList", () => {
    it("fetches characters list successfully", async () => {
      const mockData = { results: [{ name: "Luke Skywalker" }] };
      makeApiGetCall.mockReturnValue({ data: mockData });
      URLS.PEOPLE = vi.fn(() => "https://api.example.com/people");
      const { result, waitFor } = await renderHook(
        () => useGetCharactersList(1),
        {
          wrapper: ({ children }) => (
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          ),
        },
      );

      await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
      expect(result.current.data).toEqual(mockData);
      expect(makeApiGetCall).toHaveBeenCalledWith({
        url: "https://api.example.com/people",
      });
    });

    it("handles error while fetching characters list", async () => {
      makeApiGetCall.mockRejectedValueOnce(new Error("API Error"));
      URLS.PEOPLE = vi.fn(() => "https://api.example.com/people");

      const { result, waitFor } = renderHook(() => useGetCharactersList(1), {
        wrapper: ({ children }) => (
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        ),
      });

      await waitFor(() => expect(result.current.isError).toBeTruthy());
    });
  });

  describe("useGetCharacterHomePlanet", () => {
    it("fetches characters list successfully", async () => {
      makeApiGetCall.mockReturnValue({ data: mockResponsePlanetApi });
      URLS.PEOPLE = vi.fn(() => "https://api.example.com/people");
      const { result, waitFor } = await renderHook(
        () => useGetCharacterHomePlanet(1),
        {
          wrapper: ({ children }) => (
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          ),
        },
      );

      await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
      expect(result.current.data).toEqual(mockResponsePlanetApi);
      expect(makeApiGetCall).toHaveBeenCalledWith({
        url: "https://api.example.com/people",
      });
    });

    it("handles error while fetching characters list", async () => {
      makeApiGetCall.mockRejectedValueOnce(new Error("API Error"));
      URLS.PEOPLE = vi.fn(() => "https://api.example.com/people");

      const { result, waitFor } = renderHook(
        () => useGetCharacterHomePlanet(1),
        {
          wrapper: ({ children }) => (
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          ),
        },
      );

      await waitFor(() => expect(result.current.isError).toBeTruthy());
    });
  });

  describe("useGetCharacterDetails", () => {
    it("fetches characters Details successfully", async () => {
      makeApiGetCall.mockReturnValue({ data: mockResponseDetailsPage });
      URLS.PEOPLE = vi.fn(() => "https://api.example.com/people");
      const { result, waitFor } = await renderHook(
        () => useGetCharacterDetails(1),
        {
          wrapper: ({ children }) => (
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          ),
        },
      );

      await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
      expect(result.current.data).toEqual(mockResponseDetailsPage);
      expect(makeApiGetCall).toHaveBeenCalledWith({
        url: "https://api.example.com/people",
      });
    });

    it("handles error while fetching characters list", async () => {
      makeApiGetCall.mockRejectedValueOnce(new Error("API Error"));
      URLS.PEOPLE = vi.fn(() => "https://api.example.com/people");

      const { result, waitFor } = renderHook(() => useGetCharacterDetails(1), {
        wrapper: ({ children }) => (
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        ),
      });

      await waitFor(() => expect(result.current.isError).toBeTruthy());
    });
  });

  describe("useGetCharacterFilms", () => {
    it("fetches characters Details successfully", async () => {
      makeApiGetCall.mockReturnValue({ data: moviesList });
      URLS.PEOPLE = vi.fn(() => "https://api.example.com/people");
      const { result, waitFor } = await renderHook(
        () => useGetCharacterFilms(1),
        {
          wrapper: ({ children }) => (
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          ),
        },
      );

      await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
      expect(result.current.data).toEqual(moviesList);
      expect(makeApiGetCall).toHaveBeenCalledWith({
        url: "https://api.example.com/people",
      });
    });

    it("handles error while fetching characters list", async () => {
      makeApiGetCall.mockRejectedValueOnce(new Error("API Error"));
      URLS.PEOPLE = vi.fn(() => "https://api.example.com/people");

      const { result, waitFor } = renderHook(() => useGetCharacterFilms(1), {
        wrapper: ({ children }) => (
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        ),
      });

      await waitFor(() => expect(result.current.isError).toBeTruthy());
    });
  });
});
