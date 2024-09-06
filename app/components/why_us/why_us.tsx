import { ShieldCheck, Zap, HeartHandshake } from "lucide-react";

export default function Why_us() {
  return (
    <section className="w-full min-h-3/6 bg-gray-900 text-white flex items-center justify-center py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Why we stand out
          </h2>
          <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover the unique features that set us apart from the competition
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="bg-white/10 p-3 rounded-full">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Unmatched Security</h3>
            <p className="text-gray-300">
              Our state-of-the-art security measures ensure your data is always
              protected.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="bg-white/10 p-3 rounded-full">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Lightning Fast</h3>
            <p className="text-gray-300">
              Experience blazing speeds with our optimized infrastructure and
              efficient algorithms.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="bg-white/10 p-3 rounded-full">
              <HeartHandshake className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">24/7 Support</h3>
            <p className="text-gray-300">
              Our dedicated team is always ready to assist you, anytime,
              anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
