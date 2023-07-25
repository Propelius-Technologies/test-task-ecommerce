import Head from "next/head";
import React from "react";
import Header from "./header";
import { Box } from "@mui/material";
import Footer from "./footer";
interface LayoutProp {
  title?: string;
  children: React.ReactElement;
}
const Layout = ({ title, children }: LayoutProp) => {
  return (
    <>
      <Head>{title ?? "E-commerce"}</Head>
      <Header />
      <Box
        sx={{
          mt: { xs: "60px", md: "70px" },
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
