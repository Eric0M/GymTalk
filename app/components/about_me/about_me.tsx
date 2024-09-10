import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="bg-gray-900 py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 max-w-5xl">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          About Us
        </h2>
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="About Us Image 1"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="w-full md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="About Us Image 2"
                width={300}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-300">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <Image
                src="/placeholder.svg?height=350&width=350"
                alt="About Us Image 3"
                width={350}
                height={350}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Our Values
              </h3>
              <p className="text-gray-300">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
