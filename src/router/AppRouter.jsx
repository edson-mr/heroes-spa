import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { MarvelPage, DcPage,SearchPage,Hero } from "../heroes/";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { LoginPage } from "../auth/pages/LoginPage";
import {PrivateRoute} from './PrivateRoute'
import { PublicRoute } from "./PublicRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HeroesRoutes />
      </PrivateRoute>
    ),
    children: [
      {
        path: "marvel",
        element: <MarvelPage />,
      },
      {
        path: "dc",
        element: <DcPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "hero/:heroId",
        element: <Hero />,
      },
      {
        path: "/*",
        element: <Navigate to="/" />,
      },
    ],
  },
  {
    path: "login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
]);

export const AppRouter = () => {
  return (
      <RouterProvider router={router} />
  );
};
