import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProgramOptions() {
  const programs = [
    {
      title: "Web Development",
      description:
        "Learn to build modern web applications using the latest technologies.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Data Science",
      description:
        "Dive into the world of data analysis, machine learning, and AI.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Mobile App Development",
      description:
        "Create cutting-edge mobile applications for iOS and Android platforms.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  return (
    <div className="bg-black text-gray-100 min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Our Program Options
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 justify-items-center">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 w-full max-w-sm flex flex-col"
            >
              <CardHeader>
                <Image
                  src={program.image}
                  alt={program.title}
                  width={300}
                  height={200}
                  className="rounded-t-lg w-full"
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="text-xl mb-2 text-center text-white">
                  {program.title}
                </CardTitle>
                <p className="text-gray-400 text-center">
                  {program.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full hover:bg-gray-200 hover:text-black"
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="px-8 bg-white text-black hover:bg-gray-200 hover:text-black"
          >
            Learn Moreeee
          </Button>
        </div>
      </div>
    </div>
  );
}
