import {Box} from "@mui/material";
import ProductCard from "@/sections/product-list/ProductCard";
import {useEffect, useState} from "react";
import {getAllProduct} from "@/services/product.services";
import {ProductType} from "@/types/product.types";

const ProductList = () => {
  const [productList, setProductList] = useState<ProductType[] | null>(null);

  const getProduct = async () => {
    const product = await getAllProduct()
    console.log({product});
    setProductList(product.data);
  }

  useEffect(() => {
    getProduct().then()
  }, [])

  return (
    <Box className={"container"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px"
        }}
      >
        {productList?.length > 0 && productList?.map((item, index) => {
          return (
            <ProductCard key={index} productData={item}/>
          )
        })}
      </Box>
    </Box>
  )
}

export default ProductList