import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  Divider,
  Drawer,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useAppSelector } from "@/hooks/useAddToCart";
import { ProductType } from "@/types/product.types";
import { getAllProduct } from "@/services/product.services";
import CartCard from "../card/CartCard";
import { placeOrder } from "@/redux/addToCart";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import { assets } from "@/assets";

interface SidebarProps {
  isOpen: boolean;
  close: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, close }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useAppSelector((state) => state.addToCart.cart);
  const [productList, setProductList] = useState<ProductType[] | null>(null);
  const [cartProductList, setCartProductList] = useState<ProductType[] | null>(
    null
  );
  const [confirm, setConfirm] = useState(false);
  const [price, setPrice] = useState(0);
  const [loader, setLoader] = useState(false);

  const getProduct = async () => {
    const product = await getAllProduct();
    setProductList(product?.data as ProductType[]);
    setLoader(false);
  };

  useEffect(() => {
    setLoader(true);
    getProduct().then();
  }, []);

  useEffect(() => {
    if (productList?.length) {
      setCartProductList(
        productList?.filter(
          (data) => cart?.map(({ id }) => id)?.includes(data.id)
        ) ?? []
      );
      setPrice(
        productList
          ?.filter((data) => cart?.map(({ id }) => id)?.includes(data.id))
          ?.reduce(
            (prev, item) =>
              prev +
              item.price *
                (cart?.find((c) => c?.id === item?.id)?.quantity ?? 1),
            0
          )
      );
    }
  }, [cart, productList]);

  const handleOrder = () => {
    setConfirm(true);
    setTimeout(() => {
      dispatch(placeOrder());
      setConfirm(false);
      close();
      router.back();
    }, 2000);
  };

  return (
    <>
      <Dialog
        open={confirm}
        fullScreen
        sx={{
          ".MuiPaper-root": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#e1f4e6",
          },
          img: { maxWidth: "500px" },
        }}
      >
        <Image
          src={assets.images.CONFIRM}
          alt={"Success"}
          style={{ height: "100%", objectFit: "contain" }}
        />

        <h2
          style={{
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translate(-50%, 0)",
            width: "100%",
            textAlign: "center",
          }}
        >
          Order placed successfully
        </h2>
      </Dialog>
      <Drawer open={isOpen} onClose={close} anchor={"right"}>
        <Box sx={{ width: { xs: "100vw", md: "600px" } }} role="presentation">
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <h3>Cart</h3>
              <Close sx={{ cursor: "pointer" }} onClick={close} />
            </Box>
            <Divider />
          </Box>

          <Box
            sx={{
              px: "20px",
              height: "70vh",
              overflow: "auto",
            }}
          >
            {loader ? (
              <CircularProgress color="inherit" />
            ) : cartProductList?.length ? (
              cartProductList?.map((data) => (
                <Box key={data.id}>
                  <CartCard product={data} />
                </Box>
              ))
            ) : (
              <Box sx={{ py: 4, textAlign: "center" }}>
                <h4>No products added</h4>
              </Box>
            )}
          </Box>

          <Divider sx={{ mb: 1 }} />
          <Box px={2}>
            <Typography
              variant="h6"
              sx={{
                color: "#ff4c3b",
                fontWeight: "600",
                fontFamily: "Poppins",
                textTransform: "uppercase",
              }}
            >
              Order Summary
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              gap={"10px"}
              my={2}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                }}
              >
                Sub Total:
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                }}
              >
                $ {price.toFixed(2)}
              </Typography>
            </Box>
            <Button
              variant="contained"
              fullWidth
              sx={{
                my: 2,
                fontWeight: 600,
                background: "#363131",
                "&:hover": { background: "#4e4141" },
              }}
              disabled={!cart?.length}
              onClick={() => handleOrder()}
            >
              Order Now
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
