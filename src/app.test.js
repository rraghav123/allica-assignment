import { createBrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "./App";
import { routers } from "./router/index.js";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./providers/ReactQueryProvider.js";

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  createBrowserRouter: vi.fn(() => ({})),
  RouterProvider: vi.fn(({ children }) => <div>{children}</div>),
}));

vi.mock("./providers/ReactQueryProvider.js", () => ({
  queryClient: {},
}));

vi.mock("@tanstack/react-query", () => ({
  QueryClientProvider: vi.fn(({ children }) => <div>{children}</div>),
}));

describe("App Component", () => {
  it("renders the RouterProvider correctly", () => {
    // Render the App component
    render(<App />);

    expect(createBrowserRouter).toHaveBeenCalledWith(routers);
  });

  it("renders the  QueryClientProvider correctly", () => {
    // Render the App component
    render(<App />);

    expect(QueryClientProvider).toHaveBeenCalledWith(
      expect.objectContaining({ client: queryClient }),
      {},
    );
  });
});
