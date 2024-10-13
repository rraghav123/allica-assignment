import { renderHook } from "@testing-library/react-hooks";
import { act } from "react";
import { expect, describe, it } from "vitest";

import { useEditable } from "./useEditable";

describe("useEditable", () => {
  it("should initialize with the correct initial gender", () => {
    const { result } = renderHook(() => useEditable({ gender: "male" }));

    expect(result.current.gender).toBe("male");
    expect(result.current.isEditEnabled).toBe(false);
  });

  it("should update gender", () => {
    const { result } = renderHook(() => useEditable({ gender: "male" }));

    act(() => {
      result.current.setGender("female");
    });

    expect(result.current.gender).toBe("female");
  });

  it("should enable editing", () => {
    const { result } = renderHook(() => useEditable({ gender: "male" }));

    act(() => {
      result.current.setEditEnabled(true);
    });

    expect(result.current.isEditEnabled).toBe(true);
  });

  it("should disable editing", () => {
    const { result } = renderHook(() => useEditable({ gender: "male" }));

    act(() => {
      result.current.setEditEnabled(true);
    });

    act(() => {
      result.current.setEditEnabled(false);
    });

    expect(result.current.isEditEnabled).toBe(false);
  });
});
