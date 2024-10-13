import { describe, it, expect } from "vitest";
import { STATICS } from "./Statics.js";

describe("STATICS", () => {
  it("should be defined", () => {
    expect(STATICS).toBeDefined();
  });

  it("should contain DATA_TO_SHOW with correct structure", () => {
    const expectedDataToShow = [
      {
        label: "Hair Color",
        key: "hair_color",
      },
      {
        label: "Eye Color",
        key: "eye_color",
      },
      {
        label: "Gender",
        key: "gender",
      },
    ];

    expect(STATICS.DATA_TO_SHOW).toEqual(expectedDataToShow);
  });
});
