import Header from "./components/header/header";
import MainHero from "./components/main_hero/main_hero";
import About from "./components/about_me/about_me";
import Product_Card from "./components/product_card/product_card";
import Pricing from "./components/pricing/pricing";
import Why_us from "./components/why_us/why_us";

export default function Home() {
  return (
    <>
      <Header />
      <MainHero />
      <Why_us />
      <Pricing />
    </>
  );
}
