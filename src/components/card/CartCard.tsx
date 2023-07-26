import { ProductType } from "@/types/product.types";
import { Box, Grid, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import CartBtn from "../cart/CartBtn";
import { useAppSelector } from "@/hooks/useAddToCart";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "@/redux/addToCart";

interface CartCardType {
  product: ProductType;
}

const CartCard = ({ product }: CartCardType) => {
  const dispatch = useDispatch();
  const cart = useAppSelector((state) => state.addToCart.cart);
  return (
    <Stack py={2} borderBottom={"1px solid #eee"}>
      <Stack justifyContent={"flex-end"} textAlign={"end"} alignItems={"end"}>
        <DeleteIcon
          sx={{ cursor: "pointer", mb: 2 }}
          onClick={() => {
            dispatch(deleteItemFromCart(product.id));
          }}
        />
      </Stack>
      <Grid container spacing={2} alignItems={"center"}>
        <Grid item xs={4}>
          <Box
            sx={{
              width: "100%",
              paddingTop: "100%" /* 1:1 Aspect Ratio */,
              paddingX: "40px",
              position: "relative",
            }}
          >
            <Image
              src={product?.image}
              alt={"product image"}
              fill
              objectFit={"contain"}
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Stack width={"100%"} gap={1}>
            <span>{product.title}</span>
            <p
              style={{
                marginTop: "auto",
              }}
            >
              <b>Price</b> : $ {product?.price}
            </p>
            <Box>
              <CartBtn
                id={product?.id ?? 0}
                quantity={
                  cart.find((item) => item.id === product?.id)?.quantity ?? 0
                }
              />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default CartCard;
