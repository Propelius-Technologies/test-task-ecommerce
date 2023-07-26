import ProductListSlider from "@/sections/product-list/ProductListSlider";
import ProductList from "@/sections/product-list/ProductList";
import Head from "next/head";

const product = () => {
  return (
    <div style={{
      height: "100%",
      width: "100%"
    }}>
      <Head>
        <title>ECommerce | Products</title>
      </Head>
      <ProductListSlider/>
      <ProductList/>
    </div>
  )
}

export default product