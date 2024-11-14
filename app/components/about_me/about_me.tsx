import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="bg-black py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 max-w-5xl">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          About Me
        </h2>
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <Image
                src="/Paddleboard_Handstand.jpg"
                alt="About Us Image 1"
                width={741}
                height={1650}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Hey, I'm Eric
              </h3>
              <p className="text-gray-300">
                I'm 22 years old and I've been training calisthenics for roughly
                3 years now. I started training in 2020 when everything was shut
                down and we were forced to stay inside. I spend a lot of time on
                my phone during those times and saw a lot of inspiring athletes
                doing some really cool stuff and wanted to learn how to do just
                that.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="w-full md:w-1/2">
              <Image
                src="/Before.jpeg"
                alt="About Us Image 2"
                width={400}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-white mb-4">
                How I started
              </h3>
              <p className="text-gray-300">
                My first goal was the handstand, I thought this would be easy
                because I could always do one growing up but I sucked at it when
                I started, and I wasted so much time trying to learn it in the
                wrong ways. Eventually, I got to the point where I could do it,
                but not before falling on my face more times than I can count.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <Image
                src="/New_Back.jpeg"
                alt="About Us Image 3"
                width={400}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-white mb-4">
                My Goals
              </h3>
              <p className="text-gray-300">
                Since then I've been working on improving my skills every day,
                and have learned a lot. Now I just want to see if I can help
                people who are in the position I was do the same. I can't
                promise you perfect results, but I can say that whether you have
                some experience with calisthenics already or are just starting
                out, I can help you improve your strength and skills to help you
                reach your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
