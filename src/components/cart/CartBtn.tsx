import { useAppDispatch } from "@/hooks/useAddToCart";
import { addItemToCart, removeItemFromCart } from "@/redux/addToCart";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface CartBtnType {
  quantity: number;
  id: number;
}
const CartBtn = ({ quantity, id }: CartBtnType) => {
  const dispatch = useAppDispatch();
  return (
    <>
      {quantity <= 0 ? (
        <Button
          variant="contained"
          sx={{
            fontWeight: "600",
            background: "#363131",
            "&:hover": { background: "#4e4141" },
          }}
          onClick={() => dispatch(addItemToCart(id))}
        >
          Add to Cart
        </Button>
      ) : (
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Button
            variant="contained"
            onClick={() => dispatch(removeItemFromCart(id))}
            sx={{
              height: "35px",
              minWidth: "35px",
              fontSize: "25px",
              background: "#999999",
              fontWeight: "600",
              "&:hover": { background: "#999999aa" },
            }}
          >
            -
          </Button>
          <Typography variant="body2">{quantity}</Typography>
          <Button
            variant="contained"
            onClick={() => dispatch(addItemToCart(id))}
            sx={{
              height: "35px",
              minWidth: "35px",
              fontSize: "25px",
              fontWeight: "600",
              background: "#363131",
              "&:hover": { background: "#4e4141" },
            }}
          >
            +
          </Button>
        </Box>
      )}
    </>
  );
};

export default CartBtn;
