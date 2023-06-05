import React from "react";
import { Box, Button, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
function Sidebar({ toggleDrawer }: { toggleDrawer: (param: boolean) => void }) {
  return (
    <Box
      sx={{ width: "100vw" }}
      role="presentation"
      //   onKeyDown={() => toggleDrawer(false)}
    >
      <Box display="flex" justifyContent={"end"} alignItems="end" mt={5}>
        <Button endIcon={<CloseIcon />} onClick={() => toggleDrawer(false)}>
          Close
        </Button>
      </Box>
      <Divider />
      <Box display="flex" justifyContent={"center"} alignItems="center"></Box>
    </Box>
  );
}

export default Sidebar;
