import { Box } from "@mui/material";
import React from "react";

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        pt: { xs: "50px", sm: "80px", md: "120px" },
        pb: { xs: "50px", sm: "80px", md: "120px" },
      }}
    >
      <div className="container">{children}</div>
    </Box>
  );
};

export default Section;
