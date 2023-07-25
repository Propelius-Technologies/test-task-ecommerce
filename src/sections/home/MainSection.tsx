import { assets } from "@/assets";
import { Box } from "@mui/material";
import React from "react";

const MainSection = () => {
  return (
    <>
      <Box
        sx={{
          height: { xs: "calc(100vh - 60px)", md: "calc(100vh - 70px)" },
          background: `url(${assets.images.HERO_IMAGE.src}) no-repeat center top/cover`,
          backgroundAttachment: "fixed",
          position: "relative",
          zIndex: "1",
          overflow: "hidden",
          "&:before": {
            content: "''",
            position: "absolute",
            background: "rgba(0,0,0,0.2)",
            zIndex: -1,
            inset: "0px",
            transition: "all 0.3s",
          },
          "& h1 , p": {
            color: "white",
          },
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
