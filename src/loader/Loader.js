import React from 'react'
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <Box
    minHeight="92vh"
    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  >
    <CircularProgress size={70} />
  </Box>
  )
}

export default Loader