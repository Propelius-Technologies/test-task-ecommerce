import { Cart } from "@/assets/svg";
import { useAppSelector } from "@/hooks/useAddToCart";
import { Box } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "@/components/side-bar/Sidebar";

const Header = () => {
  const total = useAppSelector((state) => state.addToCart.total);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const handleOpenSidebar = () => {
    setOpenCart(true);
  };

  const closeCart = () => {
    setOpenCart(false);  
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          zIndex: 9,
          width: "100%",
          background: "#fff",
          boxShadow: "0 4px 5px rgba(0,0,0,0.1)",
        }}
      >
        <div className="container">
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            py={"20px"}
          >
            <div className="logo">
              <Link href={"/"} className="prime-color">
                ECommerce
              </Link>
            </div>
            <Box
              sx={{
                ul: {
                  display: "flex",
                  alignItems: "center",
                  gap: { md: "130px", xs: "30px" },
                  a: {
                    color: "#000",
                  },
                  path: {
                    fill: "#000",
                  },
                },
                svg: {
                  height: { md: "30px", xs: "20px" },
                  width: { md: "30px", xs: "20px" },
                },
              }}
            >
              <nav>
                <ul>
                  <li>
                    <Link href="/product">Product</Link>
                  </li>
                  <li>
                    <Box
                      position={"relative"}
                      sx={{
                        cursor: "pointer",
                      }}
                    >
                      {!!total && (
                        <span
                          style={{
                            color: "#FFF",
                            padding: "5px",
                            width: total > 99 ? "30px" : "25px",
                            borderRadius: "50%",
                            position: "absolute",
                            background: "#ff4c3b",
                            fontSize: "14px",
                            lineHeight: "16px",
                            textAlign: "center",
                            top: "0",
                            right: "0",
                            transform: "translate(50%, -50%)",
                            fontWeight : 600,
                          }}
                        >
                          {total > 99 ? "99+" : total}
                        </span>
                      )}
                      <Cart onClick={handleOpenSidebar} />
                      <Sidebar isOpen={openCart} close={closeCart} />
                    </Box>
                  </li>
                </ul>
              </nav>
            </Box>
          </Box>
        </div>
      </header>
    </>
  );
};

export default Header;
