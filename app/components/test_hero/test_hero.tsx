// "use client";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import homeImage from "@/public/planche_blue.jpg";
// import { useRouter } from "next/navigation";

// export default function Hero() {
//   const router = useRouter();
//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       <Image
//         src={homeImage}
//         alt="Gym background"
//         fill
//         className="absolute inset-0 z-0 hero-overlay bg-opacity-60"
//         style={{
//           objectFit: "cover",
//         }}
//         sizes="100vw"
//         priority
//       />
//       <div className="absolute inset-0 z-10 flex flex-col items-center justify-center ">
//         <div className="text-center space-y-6 max-w-2xl px-4">
//           <h1
//             className="lg:text-6xl text-4xl font-bold text-white drop-shadow-lg"
//             style={{
//               textShadow: `-1px -1px 0 #4f46e5,
//                  1px -1px 0 #4f46e5,
//                  -1px 1px 0 #4f46e5,
//                  1px 1px 0 #4f46e5`,
//             }}
//           >
//             Welcome to GymTalk
//           </h1>
//           <p className="text-lg lg:text-2xl text-white drop-shadow-md">
//             Connect with athletes that share your goals, and want to improve
//             just as much as you do.
//           </p>
//           <Button
//             className="hover:bg-indigo-400 text-white bg-indigo-600 font-semibold py-3 px-8 rounded-full text-xl mt-4"
//             onClick={() => router.push("/gymtalk+")}
//           >
//             Get started
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/planche_blue.jpg"
        alt="Gym background"
        fill
        className="absolute inset-0 z-0"
        style={{ objectFit: "cover" }}
        sizes="100vw"
        priority
      />
      <div className="absolute inset-x-0 bottom-0 md:inset-0 z-10 flex flex-col items-center justify-end md:justify-center pb-8 md:pb-0">
        <div className="text-center space-y-4 md:space-y-6 max-w-2xl px-4">
          <h1
            className="text-4xl md:text-6xl font-bold text-white inline-block"
            style={{
              textShadow: `-1px -1px 0 #4f46e5,
                 1px -1px 0 #4f46e5,
                 -1px 1px 0 #4f46e5,
                 1px 1px 0 #4f46e5`,
            }}
          >
            Welcome to GymTalk
          </h1>
          <p className="text-xl md:text-2xl text-white drop-shadow-md">
            Connect with athletes that share your goals, and want to improve
            just as much as you do.
          </p>
          <Button className="bg-indigo-600 hover:bg-indigo-400 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-full text-lg md:text-xl mt-2 md:mt-4">
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}
