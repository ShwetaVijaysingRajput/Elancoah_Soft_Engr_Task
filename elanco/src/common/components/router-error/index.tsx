import { useRouteError } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import "./index.css";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <Box className="errorContainer">
      <Box bgcolor={"red"} width="75%" display={"flex"}>
        <ErrorOutlineOutlinedIcon color="primary" />
        <Typography>Sorry, an unexpected error has occurred.</Typography>
        <Typography>{error.statusText || error.message}</Typography>
      </Box>
    </Box>
  );
}
