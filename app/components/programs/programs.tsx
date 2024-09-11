import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ProgramOptions() {
  const programs = [
    {
      image: "/planche.jpg",
      title: "Program 1",
      description:
        "Description of Program 1. This program offers exciting features and benefits.",
      buttonText: "Get Started",
    },
    {
      image: "/Handstand.jpg",
      title: "Program 2",
      description:
        "Description of Program 2. Discover the unique aspects of this program.",
      buttonText: "Get Started",
    },
    {
      image: "/Front_Lever.png",
      title: "Program 3",
      description:
        "Description of Program 3. Find out how this program can help you achieve your goals.",
      buttonText: "Get Started",
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
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-center mb-4">{program.description}</p>
              <Button
                variant="secondary"
                className=" w-auto bg-indigo-600 text-white hover:bg-indigo-400 rounded-full"
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
          >
            See All Programs
          </Button>
        </div>
      </div>
    </section>
  );
}
