import CartBtn from "@/components/cart/CartBtn";
import Rating from "@/components/pdp/Rating";
import Section from "@/components/section";
import { useAppSelector } from "@/hooks/useAddToCart";
import { getProductById } from "@/services/product.services";
import { ProductType } from "@/types/product.types";
import { Box, Chip, Grid, Stack } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const router = useRouter();
  const cart = useAppSelector((state) => state.addToCart.cart);
  const [loader, setLoader] = useState(true);
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    if (router.isReady && router?.query.id) {
      setLoader(true);
      getProductDetail(parseInt(router?.query.id as string));
    }
  }, [router]);

  const getProductDetail = async (id: number) => {
    const response = await getProductById(id);
    setProduct(response?.data);
    setLoader(false);
  };

  return (
    <>
      <Section>
        {loader ? (
          <></>
        ) : (
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Box>
                {product?.image && (
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
                      alt={product?.title ?? "Product image"}
                      fill
                      objectFit={"contain"}
                    />
                  </Box>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack gap={2}>
                <Stack
                  flexDirection={"row"}
                  alignContent={"center"}
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                >
                  <Chip
                    label={product?.category}
                    sx={{
                      borderRadius: "10px",
                      textTransform: "capitalize",
                      background: "#ff4c3b",
                      span: {
                        color: "white",
                        fontWeight: "600",
                      },
                    }}
                  />
                  <Stack
                    flexDirection={"row"}
                    gap={2}
                    alignContent={"center"}
                    justifyContent={"center"}
                  >
                    {product?.rating.rate && (
                      <Rating rating={product?.rating.rate} />
                    )}
                    <p>{product?.rating.count} rating</p>
                  </Stack>
                </Stack>
                <h3>{product?.title}</h3>
                <p>{product?.description}</p>
                <Stack gap={2}>
                  <p>
                    <b>Price</b> : $ {product?.price}
                  </p>
                  <Box>
                    <CartBtn
                      id={product?.id ?? 0}
                      quantity={
                        cart.find((item) => item.id === product?.id)
                          ?.quantity ?? 0
                      }
                    />
                  </Box>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        )}
      </Section>
    </>
  );
};

export default ProductDetail;
