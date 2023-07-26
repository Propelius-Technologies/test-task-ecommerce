import { Box, Grid } from "@mui/material";
import ProductCard from "@/sections/product-list/ProductCard";
import { useEffect, useState } from "react";
import { getAllProduct } from "@/services/product.services";
import { ProductType } from "@/types/product.types";
import Loader from "@/components/loader/Loader";

const ProductList = () => {
  const [productList, setProductList] = useState<ProductType[] | null>(null);
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

  return (
    <Box className={"container"}>
      <h2>Products</h2>
      {loader ? (
        <Loader />
      ) : (
        <Grid container spacing={4} my={10}>
          {productList &&
            productList?.length &&
            productList?.map((item) => (
              <Grid item key={item.id} md={3} xs={12} sm={6}>
                <ProductCard productData={item} />
              </Grid>
            ))}
        </Grid>
      )}
    </Box>
  );
};

export default ProductList;
