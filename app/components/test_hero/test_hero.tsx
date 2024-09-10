import Image from "next/image";
import { Button } from "@/components/ui/button";
import homeImage from "@/public/heroIMG.jpeg";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src={homeImage}
        alt="Gym background"
        fill
        className="absolute inset-0 z-0 hero-overlay bg-opacity-60"
        style={{ objectFit: "cover" }}
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div className="text-center space-y-6 max-w-2xl px-4">
          <h1 className="text-6xl font-bold text-white drop-shadow-lg">
            GymTalk
          </h1>
          <p className="text-2xl text-white drop-shadow-md">
            Connect with fitness enthusiasts, share your progress, and achieve
            your goals together.
          </p>
          <Button className="hover:bg-gray-200 hover:text-black text-black bg-white font-semibold py-3 px-8 rounded-full text-xl mt-4">
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}
