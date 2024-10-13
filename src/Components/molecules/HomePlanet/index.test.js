import { render } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import HomePlanet from "./index.jsx";
import CharacterDetailsItem from "../../atoms/CharacterDetailsItem/index.jsx";

import { mockResponsePlanetApi } from "../../../test/mockData.js";
import { useGetCharacterHomePlanet } from "../../../generalQuery.js";

vi.mock("../../../generalQuery.js", () => ({
  useGetCharacterHomePlanet: vi.fn(),
}));

vi.mock("../../atoms/CharacterDetailsItem/index.jsx", () => ({
  default: vi.fn(() => <div data-testid="character-details-item" />),
}));

describe("HomePlanet Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("Calls CharacterDetailsItem with loading props", () => {
    useGetCharacterHomePlanet.mockReturnValue({
      data: null,
      isLoading: true,
    });

    const { unmount } = render(<HomePlanet id={1} />);

    expect(CharacterDetailsItem).toHaveBeenCalledWith(
      expect.objectContaining({
        label: "Home Planet",
        value: undefined,
        isLoading: true,
      }),
      {},
    );

    unmount();
  });

  it("Calls CharacterDetailsItem with correct props", () => {
    useGetCharacterHomePlanet.mockReturnValue({
      data: mockResponsePlanetApi,
      isLoading: false,
    });

    const { unmount } = render(<HomePlanet id={1} />);

    expect(CharacterDetailsItem).toHaveBeenCalledWith(
      expect.objectContaining({
        label: "Home Planet",
        value: mockResponsePlanetApi.name,
        isLoading: false,
      }),
      {},
    );

    unmount();
  });

  it("Calls HomePlanet with correct id", () => {
    useGetCharacterHomePlanet.mockReturnValue({
      data: mockResponsePlanetApi,
      isLoading: false,
    });

    const { unmount } = render(<HomePlanet id={1} />);

    expect(CharacterDetailsItem).toHaveBeenCalledWith(
      expect.objectContaining({
        label: "Home Planet",
        value: mockResponsePlanetApi.name,
        isLoading: false,
      }),
      {},
    );

    unmount();
  });
});
