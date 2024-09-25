import Why_us from "./components/why_us/why_us";
import Hero from "./components/test_hero/test_hero";
import ProgramOptions from "./components/programs/programs";
import Disc_standard_and_premium from "./components/disc_standard_and_premium/discord_standard_and_premium";

export default function Home() {
  return (
    <>
      <Hero />
      <Why_us />
      <Disc_standard_and_premium />
      <ProgramOptions />
    </>
  );
}
