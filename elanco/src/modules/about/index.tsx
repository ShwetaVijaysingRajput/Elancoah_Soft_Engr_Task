import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import "./index.css";

function About() {
  return (
    <Box
      display={{ xs: "block", sm: "flex" }}
      height={{ xs: "auto", sm: "calc(100vh - 50px)" }}
      className="aboutContainer"
    >
      <Box className="childContainer" width={{ xs: "100%", sm: "48%" }}>
        <Typography
          variant="h6"
          component="h1"
          color="blueviolet"
          fontSize="large"
          ml={1}
        >
          About app
        </Typography>
        <Divider />
        <Typography
          variant="h6"
          component="p"
          color="black"
          fontSize="medium"
          ml={1}
        >
          This App is built using React,React-Router-Dom,JavaScript,
          TypeScript,HTML and CSS.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="black"
          fontSize="medium"
          ml={1}
        >
          Other libraries used for this project are Material UI and Material
          Icons for building components, Ag Grid for Table components.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="black"
          fontSize="medium"
          ml={1}
        >
          Along with these libraries also using Axios library to make Api calls.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="black"
          fontSize="medium"
          ml={1}
        >
          This App has ErrorBoundary, Loader component.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="black"
          fontSize="medium"
          ml={1}
        >
          This App is responsive for all devices
        </Typography>
      </Box>
      <Box
        className="childContainer"
        width={{ xs: "100%", sm: "48%" }}
        mt={{ xs: "40px", sm: "0px" }}
      >
        <Typography
          variant="h6"
          component="h1"
          color="blueviolet"
          fontSize="large"
          ml={1}
        >
          About me
        </Typography>
        <Divider />
        <Typography
          variant="h6"
          component="p"
          color="black"
          fontSize="medium"
          ml={1}
        >
          I am a front end developer, have around 4 years of experience. Mostly
          worked in React. Currently working in Health Care domain.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="black"
          fontSize="medium"
          ml={1}
        >
          My Roles and responsibilities :
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="black"
          fontSize="medium"
          ml={1}
        >
          creating the UI as per requirement given and after that integrating
          the functionality then testing the developed feature. Peer review the
          development etc.
        </Typography>
      </Box>
    </Box>
  );
}

export default About;
