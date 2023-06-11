import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../modules/home";
import ErrorBoundary from "../common/components/error-boundary/ErrorBoundary";
import Applications from "../modules/applicatios";
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
            <Applications />
          </ErrorBoundary>
        ),
      },
    ],
  },
]);
