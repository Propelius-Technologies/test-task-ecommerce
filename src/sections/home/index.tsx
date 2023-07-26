import MainSection from "./MainSection";
import BuySection from "./BuySection";
import ProductSection from "./ProductSection";
import AboutSection from "./AboutSection";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>eCommerce | Home page</title>
      </Head>
      <MainSection />
      <BuySection />
      <ProductSection />
      <AboutSection />
    </>
  );
};

export default HomePage;
