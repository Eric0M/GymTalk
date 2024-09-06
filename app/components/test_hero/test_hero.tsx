import Image from "next/image";
import { Button } from "@/components/ui/button";
import homeImage from "@/public/heroIMG.jpeg";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src={homeImage}
        alt="Gym background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      <div className="relative z-20 h-full flex flex-col items-center justify-end pb-24">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-5xl font-bold text-white">GymTalk</h1>
          <p className="text-xl text-white max-w-md mx-auto">
            Connect with fitness enthusiasts, share your progress, and achieve
            your goals together.
          </p>
        </div>
        <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full text-lg">
          Get started
        </Button>
      </div>
    </div>
  );
}
