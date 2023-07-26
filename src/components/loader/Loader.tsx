import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  //mt: { xs: "60px", md: "70px" },

  return (
    <Box
      sx={{
        height: { xs: "calc(100vh - 60px)", md: "calc(100vh - 70px)" },
        width: "100vw",

        zIndex: "2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="inherit" />
    </Box>
  );
};

export default Loader;
