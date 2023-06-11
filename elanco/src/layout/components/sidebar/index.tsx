import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TerminalIcon from "@mui/icons-material/Terminal";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useNavigate } from "react-router-dom";
function Sidebar({ toggleDrawer }: { toggleDrawer: (param: boolean) => void }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{ width: "100vw", padding: "25px", height: "100vh" }}
      role="presentation"
      display={"flex"}
      flexDirection="column"
      justifyContent={"space-between"}

      //   onKeyDown={() => toggleDrawer(false)}
    >
      <Box>
        <Box display="flex" justifyContent={"end"} alignItems="end" mt={5}>
          <Button endIcon={<CloseIcon />} onClick={() => toggleDrawer(false)}>
            Close
          </Button>
        </Box>
        <Divider />
        <Box mt={5}>
          <Box
            height={60}
            display="flex"
            justifyContent={"center"}
            width="100%"
            alignItems="center"
            bgcolor={"#8DA6EC"}
            borderRadius="4px"
            mt={4}
            sx={{
              "&:hover": { cursor: "pointer", textDecoration: "underline" },
            }}
            onClick={() => {
              navigate("/applications");
              toggleDrawer(false);
            }}
          >
            <Typography
              variant="h6"
              component="span"
              color="black"
              fontSize="large"
              ml={1}
              mr={4}
            >
              Application
            </Typography>
            <TerminalIcon />
          </Box>
          <Box
            height={60}
            display="flex"
            justifyContent={"center"}
            width="100%"
            alignItems="center"
            bgcolor={"#8DA6EC"}
            borderRadius="4px"
            mt={4}
            sx={{
              "&:hover": { cursor: "pointer", textDecoration: "underline" },
            }}
            onClick={() => {
              navigate("/resources");
              toggleDrawer(false);
            }}
          >
            <Typography
              variant="h6"
              component="span"
              color="black"
              fontSize="large"
              ml={1}
              mr={4}
            >
              Resources
            </Typography>
            <TerminalIcon />
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent={"center"} alignItems="center">
        <Divider />
        <Box
          height={60}
          display="flex"
          justifyContent={"center"}
          width="100%"
          alignItems="center"
          bgcolor={"#8DA6EC"}
          borderRadius="4px"
          mt={4}
          sx={{
            "&:hover": { cursor: "pointer", textDecoration: "underline" },
          }}
          onClick={() => {
            navigate("/about");
            toggleDrawer(false);
          }}
        >
          <Typography
            variant="h6"
            component="span"
            color="black"
            fontSize="large"
            ml={1}
            mr={4}
          >
            About
          </Typography>
          <InfoOutlinedIcon />
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
