import React from "react";
import { Box } from "@mui/material";
function Sidebar({ toggleDrawer }: { toggleDrawer: (param: boolean) => void }) {
  return (
    <Box
      sx={{ width: "100vw" }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    ></Box>
  );
}

export default Sidebar;
