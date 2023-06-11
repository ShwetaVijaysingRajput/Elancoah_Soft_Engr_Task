import React, { useEffect, useState, useCallback } from "react";
import {
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import { DropData } from "./types";
import apiClient from "../../../services/axios-instance";
import { AxiosError } from "axios";

function ShowInfo({
  getUrl,
  sel,
  setSel,
  label,
}: {
  getUrl: string;
  sel: string;
  setSel: (param: string) => void;
  label: string;
}) {
  const [dropData, setDropData] = useState<DropData>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (dropData.length === 0) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const rawData = await apiClient().get<DropData>(getUrl);
          const data = rawData.data;
          setDropData(data);
          setLoading(false);
        } catch (error: unknown) {
          setLoading(false);
          if (error instanceof AxiosError) {
            if (error.response) {
              console.error(error.response.data);
              console.error(error.response.status);
              console.error(error.response.headers);
            } else if (error.request) {
              console.error(error.request);
            } else {
              console.error("Error", error.message);
            }
          } else {
            console.error(error);
          }
        }
      };
      fetchData();
      console.log(loading);
    }
  }, [dropData.length, getUrl, loading]);

  const handleChange = useCallback(
    (e: SelectChangeEvent<string>) => {
      setSel(e.target.value);
    },
    [setSel]
  );
  return (
    <>
      <Box
        height={100}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <Typography
          variant="h6"
          component="span"
          color="black"
          fontSize={"medium"}
          ml={2}
          m={1}
        >
          Select {label} to view details
        </Typography>
        <Box
          width={{ xs: "100px", sm: "500px" }}
          display={{ xs: "flex", sm: "inline" }}
          justifyContent={{ xs: "center", sm: "start" }}
          alignItems={{ xs: "center", sm: "start" }}
        >
          <FormControl fullWidth>
            <InputLabel id="label">{label}</InputLabel>
            <Select
              labelId={label}
              id="App-select"
              label={"label"}
              disabled={loading}
              onChange={handleChange}
              value={sel}
            >
              <MenuItem value="">---select---</MenuItem>
              {dropData.length > 0 &&
                dropData.map((ele) => <MenuItem value={ele}>{ele}</MenuItem>)}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </>
  );
}

export default ShowInfo;
