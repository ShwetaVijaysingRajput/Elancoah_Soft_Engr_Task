import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../modules/home";
import ErrorBoundary from "../common/components/error-boundary/ErrorBoundary";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        ),
      },
      {
        path: "applications",
        element: (
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        ),
      },
    ],
  },
]);
