import {Box} from "@mui/material";
import Image from "next/image";
import {ProductType} from "@/types/product.types";
import React from "react";

interface ProductCardProps {
  productData: ProductType
}

const ProductCard: React.FC<ProductCardProps> = ({productData}) => {
  return (
    <Box sx={{
      // height: "400px",
      // width: "300px",
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <Box
        sx={{
          width: "100%",
          paddingTop: "100%", /* 1:1 Aspect Ratio */
          paddingX: "40px",
          position: "relative",
        }}
      >
        <Image src={productData.image} alt={'product image'} fill objectFit={'contain'}/>
      </Box>
      <Box sx={{
        width: "100%",
        display: "flex"
      }}>
        <Box sx={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          padding: "10px"
        }}>
          <span>
            {productData.title}
          </span>
          <span>
           $ {productData.price}
          </span>
        </Box>
        {/*<Box sx={{*/}
        {/*  display: "flex",*/}
        {/*  justifyContent: "center",*/}
        {/*  alignItems: "center"*/}
        {/*}}>*/}
        {/*  <CartBtn/>*/}
        {/*</Box>*/}
      </Box>
    </Box>
  )
}

export default ProductCard