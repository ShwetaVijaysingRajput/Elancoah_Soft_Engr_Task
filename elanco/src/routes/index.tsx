import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../modules/home";
import ErrorBoundary from "../common/components/error-boundary/ErrorBoundary";
import Applications from "../modules/applicatios";
import ErrorPage from "../common/components/router-error";
import Resources from "../modules/resources";
import About from "../modules/about";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
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
      {
        path: "resources",
        element: (
          <ErrorBoundary>
            <Resources />
          </ErrorBoundary>
        ),
      },
      {
        path: "about",
        element: (
          <ErrorBoundary>
            <About />
          </ErrorBoundary>
        ),
      },
    ],
  },
]);
