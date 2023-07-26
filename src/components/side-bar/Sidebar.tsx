import React, { useEffect, useState } from "react";
import { Box, Divider, Drawer } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useAppSelector } from "@/hooks/useAddToCart";
import { ProductType } from "@/types/product.types";
import { getAllProduct } from "@/services/product.services";
import CartCard from "../card/CartCard";

interface SidebarProps {
  isOpen: boolean;

  close(): void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, close }) => {
  const cart = useAppSelector((state) => state.addToCart.cart);
  const [productList, setProductList] = useState<ProductType[] | null>(null);
  const [cartProductList, setCartProductList] = useState<ProductType[] | null>(
    null
  );
  const [confirm, setConfirm] = useState(false);
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
    setCartProductList(
      productList?.filter(
        (data) => cart?.map(({ id }) => id)?.includes(data.id)
      ) ?? []
    );
  }, [cart, productList]);

  return (
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
        <Box sx={{ p: "20px" }}>
          {cartProductList?.map((data) => (
            <Box key={data.id}>
              <CartCard product={data} />
            </Box>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
