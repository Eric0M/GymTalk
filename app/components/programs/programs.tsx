"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ProgramOptions() {
  const programs = [
    {
      image: "/Planche.jpg",
      title: "Intermediate to Advanced Calisthenics",
      description:
        "For athletes who have a strong foundation and looking to take their progress to the next level.",
      buttonText: "Get Started",
      href: "/programs/Intermediate_Advanced_Program",
    },
    {
      image: "/Handstand.jpg",
      title: "Handstand Mastery",
      description:
        "For people both just starting out or advanced athletes looking to improve their technique.",
      buttonText: "Get Started",
      href: "/programs/Handstand_Mastery_Program",
    },
    {
      image: "/Front_Lever.PNG",
      title: "All you need to know about Calisthenics",
      description:
        "This is the perfect all inclusive program for anyone wanting to improve at calisthenics.",
      buttonText: "Get Started",
      href: "/programs/Calisthenics_Basics_Program",
    },
  ];

  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-[2/2] relative mb-4">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">
                {program.title}
              </h3>
              <p className="text-center mb-4 text-gray-400">
                {program.description}
              </p>
              <Button
                variant="secondary"
                className=" w-auto bg-indigo-600 text-white hover:bg-indigo-400 rounded-full"
                onClick={() => {
                  window.location.href = program.href;
                }}
              >
                {program.buttonText}
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="w-auto bg-indigo-600 text-white hover:bg-indigo-400 border-none rounded-full"
            onClick={() => {
              window.location.href = "/programs";
            }}
          >
            See All Programs
          </Button>
        </div>
      </div>
    </section>
  );
}
