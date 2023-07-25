import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets";

const ProductListSlider = () => {
  return (
    <div className="container">
      <Box
        sx={{
          height: { xs: "calc(50vh - 60px)", md: "calc(70vh - 70px)" },
          background: `url(${assets.images.HERO_IMAGE_JPG.src}) no-repeat center top/cover`,
          backgroundAttachment: "fixed",
          position: "relative",
          zIndex: "1",
          overflow: "hidden",
          mb : 10,
          "&:before": {
            content: "''",
            position: "absolute",
            background: "rgba(0,0,0,0.2)",
            zIndex: -1,
            inset: "0px",
            transition: "all 0.3s",
          },
        }}
      ></Box>
    </div>
  );
};

export default ProductListSlider;
