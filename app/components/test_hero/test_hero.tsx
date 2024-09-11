"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import homeImage from "@/public/planche_blue.jpg";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src={homeImage}
        alt="Gym background"
        fill
        className="absolute inset-0 z-0 hero-overlay bg-opacity-60"
        style={{
          objectFit: "cover",
        }}
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div className="text-center space-y-6 max-w-2xl px-4">
          <h1
            className="text-6xl font-bold text-white drop-shadow-lg"
            style={{
              textShadow: `-1px -1px 0 #4f46e5, 
                 1px -1px 0 #4f46e5, 
                 -1px 1px 0 #4f46e5, 
                 1px 1px 0 #4f46e5`,
            }}
          >
            Welcome to GymTalk
          </h1>
          <p className="text-2xl text-white drop-shadow-md">
            Connect with athletes that share your goals, and want to improve
            just as much as you do.
          </p>
          <Button
            className="hover:bg-indigo-600 text-white bg-indigo-400 font-semibold py-3 px-8 rounded-full text-xl mt-4"
            onClick={() => router.push("/gymtalk+")}
          >
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}
