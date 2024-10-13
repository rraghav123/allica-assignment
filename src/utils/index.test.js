import { describe, it, expect, vi } from "vitest";
import axios from "axios";
import { makeApiGetCall } from "./index.js";

vi.mock("axios");

describe("makeApiGetCall", () => {
  it("should make a GET request to the correct URL", async () => {
    const mockResponse = { data: { message: "success" } };
    axios.get.mockResolvedValueOnce(mockResponse);

    const url = "https://api.example.com/data";
    const response = await makeApiGetCall({ url });

    expect(axios.get).toHaveBeenCalledWith(url);

    expect(response).toEqual(mockResponse);
  });

  it("should throw an error if the request fails", async () => {
    axios.get.mockRejectedValueOnce(new Error("Network Error"));

    const url = "https://api.example.com/error";

    await expect(makeApiGetCall({ url })).rejects.toThrow("Network Error");
  });
});
