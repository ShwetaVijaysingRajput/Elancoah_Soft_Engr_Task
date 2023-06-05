import Drawer from "@mui/material/Drawer";
import Navbar from "./components/navbar";
import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import { Outlet } from "react-router-dom";
export default function Layout() {
  const [state, setState] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => {
    setState(open);
  };

  return (
    <>
      <Navbar sidebarState={state} toggleSideBar={setState} />
      <Drawer anchor={"left"} open={state} onClose={() => toggleDrawer(false)}>
        <Sidebar toggleDrawer={toggleDrawer} />
      </Drawer>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
