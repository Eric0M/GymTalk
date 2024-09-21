import Header from "./components/header/header";
import About from "./components/about_me/about_me";
import Product_Card from "./components/product_card/product_card";
import Pricing from "./components/pricing/pricing";
import Why_us from "./components/why_us/why_us";
import Hero from "./components/test_hero/test_hero";
import ProgramOptions from "./components/programs/programs";
import Discord from "./components/discord_invite/discord_invite";
import Disc_standard_and_premium from "./disc_standard_and_premium/discord_standard_and_premium";

export default function Home() {
  return (
    <>
      <Hero />
      <Why_us />
      <ProgramOptions />
    </>
  );
}
