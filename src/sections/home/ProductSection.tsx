import Section from "@/components/section";
import { getAllProduct } from "@/services/product.services";
import { ProductType } from "@/types/product.types";
import { Button, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "../product-list/ProductCard";
import { useRouter } from "next/router";

const ProductSection = () => {
  const router = useRouter();
  const [productList, setProductList] = useState<ProductType[]>([]);

  useEffect(() => {
    getCalls();
  }, []);

  const getCalls = async () => {
    const response = await getAllProduct();

    if (response?.data) {
      const data = response?.data
        .filter((data: ProductType) => Math.floor(data.rating.rate) > 3)
        .filter((_: ProductType, index: number) => index < 4);

      setProductList(data);
    }
  };
  return (
    <>
      <Section>
        <Stack
          alignItems={"center"}
          textAlign={"center"}
          gap={2}
          mb={4}
          sx={{
            px: { xs: 0, sm: 10, md: 25 },
          }}
        >
          <h2>Special products</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
            voluptatibus laborum placeat reiciendis maxime nesciunt?
            Perferendis, reprehenderit doloribus. Pariatur ducimus quod sit
            totam ad provident.
          </p>
        </Stack>
        <Grid container spacing={4}>
          {productList &&
            productList?.length &&
            productList?.map((item) => (
              <Grid item key={item.id} md={3} xs={12} sm={6}>
                <ProductCard productData={item} />
              </Grid>
            ))}
        </Grid>
        <Stack alignItems={"center"} my={2}>
          <Button
            variant="contained"
            sx={{
              fontWeight: "600",
              background: "#363131",
              "&:hover": { background: "#4e4141" },
            }}
            onClick={() => {
              router.push(`/product`)
            }}
          >
            All products
          </Button>
        </Stack>
      </Section>
    </>
  );
};

export default ProductSection;
