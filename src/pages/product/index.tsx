import ProductListSlider from "@/sections/product-list/ProductListSlider";
import ProductList from "@/sections/product-list/ProductList";

const product = () => {
  return (
    <div style={{
      height: "100%",
      width: "100%"
    }}>
      <ProductListSlider/>
      <ProductList/>
    </div>
  )
}

export default product