import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { ProductType } from "@/types/product.types";
import React from "react";
import Link from "next/link";
import Rating from "@mui/material/Rating";

interface ProductCardProps {
  productData: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ productData }) => {
  return (
    <Link
      href={`/product/${productData.id}`}
      style={{
        height: "100%",
      }}
    >
      <Box
        sx={{
          // height: "400px",
          // width: "300px",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            paddingTop: "100%" /* 1:1 Aspect Ratio */,
            paddingX: "40px",
            position: "relative",
          }}
        >
          <Image
            src={productData.image}
            alt={"product image"}
            fill
            objectFit={"contain"}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
          }}
        >
          <Stack width={"100%"} gap={2} my={2}>
            <Stack
              flexDirection={"row"}
              gap={2}
              alignContent={"center"}
              justifyContent={"space-between"}
            >
              {productData?.rating.rate && (
                <>
                  <Rating
                    sx={{ alignItems: "center" }}
                    readOnly
                    name="half-rating"
                    defaultValue={productData?.rating.rate}
                    precision={0.1}
                    size="small"
                  />
                </>
              )}
              <p>{productData?.rating.count} rating</p>
            </Stack>
            <span>{productData.title}</span>
            <p
              style={{
                marginTop: "auto",
              }}
            >
              <b>Price</b> : $ {productData?.price}
            </p>
          </Stack>
        </Box>
      </Box>
    </Link>
  );
};

export default ProductCard;
