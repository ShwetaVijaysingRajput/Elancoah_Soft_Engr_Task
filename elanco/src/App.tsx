import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
let k = 10;
function App() {
  return <RouterProvider router={router} />;
}

export default App;
