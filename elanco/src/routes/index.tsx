import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../modules/home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "applications",
        element: <Home />,
      },
    ],
  },
]);
