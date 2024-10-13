import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ReactQueryProvider, { queryClient } from "./ReactQueryProvider";
import "@testing-library/jest-dom";

describe("ReactQueryProvider Component", () => {
  it("renders children correctly within the provider", async () => {
    const { unmount } = render(
      <ReactQueryProvider>
        <div>Test Child</div>
      </ReactQueryProvider>,
    );

    expect(screen.getByText("Test Child")).toBeInTheDocument();

    unmount();
  });

  it("uses the correct queryClient configuration", () => {
    expect(queryClient.getDefaultOptions().queries).toEqual({
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: Infinity,
    });
  });
});
