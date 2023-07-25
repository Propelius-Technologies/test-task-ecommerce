import { assets } from "@/assets";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import React from "react";

const MainSection = () => {
  return (
    <>
      <Box
        sx={{
          height: { xs: "calc(100vh - 60px)", md: "calc(100vh - 70px)" },
          background: "lightBlue",
        }}
      >
        <Box className="container" height={"100%"}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 2,
              height: "100%",
            }}
          >
            <h1>Looking for Good Quality Clothes</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum dolore veritatis expedita.
            </p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MainSection;
