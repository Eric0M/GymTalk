import Header from "./components/header/header";
import MainHero from "./components/main_hero/main_hero";
import About from "./components/about_me/about_me";
import Product_Card from "./components/product_card/product_card";
import Pricing from "./components/pricing/pricing";

export default function Home() {
  return (
    <>
      <Header />
      <MainHero />
      <div className="flex flex-row">
        <Pricing />
      </div>
      <div className="flex flex-row justify-around py-40">
        <Product_Card name="Shoes" />
        <Product_Card name="Shoes" />
        <Product_Card name="Shoes" />
      </div>
    </>
  );
}
