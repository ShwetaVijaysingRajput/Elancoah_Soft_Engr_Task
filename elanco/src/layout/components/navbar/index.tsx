import React, { MouseEvent, Dispatch, SetStateAction } from "react";
import { Box, IconButton, Typography, Link } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import { useNavigate } from "react-router-dom";
type LinkEvent = MouseEvent<HTMLAnchorElement>;
function Navbar({
  sidebarState,
  toggleSideBar,
}: {
  sidebarState: boolean;
  toggleSideBar: Dispatch<SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  return (
    <>
      <Box
        height={50}
        bgcolor={"#8DA6EC"}
        p={1}
        sx={{
          justifyContent: { xs: "start", sm: "space-between" },
          display: { xs: "flex", sm: "block" },
        }}
        width="100%"
      >
        <IconButton
          aria-label="Menu"
          sx={{ display: { xs: "inline", sm: "none" } }}
          onClick={() => toggleSideBar(true)}
        >
          <AppsIcon color={sidebarState ? "error" : "primary"} />
        </IconButton>
        <Box display="flex" justifyContent="space-between" alignItems="end">
          <Box display={"flex"} justifyContent="center" alignItems={"end"}>
            <Link
              color="black"
              sx={{
                marginBottom: "-4px",
                "&:hover": { cursor: "pointer" },
                fontSize: "25px",
              }}
              underline="hover"
              onClick={(e: LinkEvent) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              Elanco
            </Link>
            <Typography
              variant="h6"
              component="p"
              color="black"
              fontSize={"small"}
              ml={2}
            >
              Created by
              <Typography
                variant="h6"
                component="span"
                color="blueviolet"
                fontSize="small"
                ml={1}
              >
                Shweta Rajput
              </Typography>
            </Typography>
          </Box>
          <Box
            justifyContent="center"
            alignItems={"center"}
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <Link
              color="black"
              sx={{
                "&:hover": { cursor: "pointer" },
                fontSize: "15px",
              }}
              underline="hover"
              onClick={(e: LinkEvent) => {
                e.preventDefault();
                navigate("/applications");
              }}
            >
              Applications
            </Link>
            <Link
              color="black"
              sx={{
                "&:hover": { cursor: "pointer" },
                fontSize: "15px",
                marginLeft: "25px",
              }}
              underline="hover"
              onClick={(e: LinkEvent) => {
                e.preventDefault();
                navigate("/resources");
              }}
            >
              Resources
            </Link>
          </Box>
          <Box
            justifyContent="center"
            alignItems={"center"}
            sx={{ display: { xs: "none", sm: "flex" } }}
          ></Box>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
