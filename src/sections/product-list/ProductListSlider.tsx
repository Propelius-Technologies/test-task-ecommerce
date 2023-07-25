import {Box} from "@mui/material";
import React from "react";
import Image from "next/image";
import {assets} from "@/assets";

const ProductListSlider = () => {
  return (
    <div className="container">
      <Box
        sx={{
          height: {xs: "calc(50vh - 60px)", md: "calc(50vh - 70px)"},
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
            <Image src={assets.images.HERO_IMAGE} alt={'hero image'}/>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default ProductListSlider