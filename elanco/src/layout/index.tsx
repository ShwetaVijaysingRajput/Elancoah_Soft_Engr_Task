import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Navbar from "./components/navbar";
import React, { useState } from "react";
import Sidebar from "./components/sidebar";
export default function Layout() {
  const [state, setState] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => {
    setState(open);
  };

  return (
    <>
      <Navbar sidebarState={state} toggleSideBar={setState} />
      <Button onClick={() => toggleDrawer(true)}>left</Button>
      <Drawer anchor={"left"} open={state} onClose={() => toggleDrawer(false)}>
        <Sidebar toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
}
