import { lazy, Suspense } from "react";

const Home = lazy(() => import("../Components/templates/Home/index.jsx"));
const Details = lazy(() => import("../Components/templates/Details/index.jsx"));

export const ROUTES = {
  HOME: "/",
  DETAILS: "details",
};

export const routers = [
  {
    path: ROUTES.HOME,
    element: (
      <Suspense fallback={<>loading...</>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: ROUTES.DETAILS,
    element: (
      <Suspense fallback={<>loading...</>}>
        <Details />
      </Suspense>
    ),
  },
];
