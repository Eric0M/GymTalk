"use client";
import { Button } from "@/components/ui/button";
import { UsersIcon, Zap, HeartHandshake } from "lucide-react";

export default function Why_us() {
  return (
    <section className="w-full bg-black text-white flex items-center justify-center py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className=" text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl  lg:text-6xl py-10">
            The BEST way to Improve With Calisthenics is Consistency...
          </h2>
          {/*<p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            But the second best way to improve is to train with others who are
            at an equal or higher skill level than you
          </p>*/}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <div className="flex flex-col items-center space-y-4 text-center border-4 rounded-3xl py-12 bg-gradient-to-br from-indigo-900 to-indigo-400">
            <div className="bg-white/10 p-3 rounded-full border-4 border-white">
              <UsersIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Train Together</h3>
            <p className="text-gray-300">
              Our state-of-the-art security measures ensure your data is always
              protected.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center border-4 rounded-3xl py-12 bg-gradient-to-br from-indigo-900 to-indigo-400">
            <div className="bg-white/10 p-3 rounded-full border-4 border-white">
              <UsersIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Train Together</h3>
            <p className="text-gray-300">
              Our state-of-the-art security measures ensure your data is always
              protected.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center border-4 rounded-3xl py-12 bg-gradient-to-br from-indigo-900 to-indigo-400">
            <div className="bg-white/10 p-3 rounded-full border-4 border-white">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Lightning Fast</h3>
            <p className="text-gray-300">
              Experience blazing speeds with our optimized infrastructure and
              efficient algorithms.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center border-4 bg-gradient-to-br from-indigo-900 to-indigo-400 rounded-3xl py-12">
            <div className="bg-white/10 p-3 rounded-full border-4 border-white">
              <HeartHandshake className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">24/7 Support</h3>
            <p className="text-gray-300">
              Our dedicated team is always ready to assist you, anytime,
              anywhere.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            className="w-auto px-8 py-3 mt-12 rounded-full bg-indigo-400 hover:bg-indigo-600 text-white font-bold"
            onClick={() => (window.location.href = "/gymtalk+")}
          >
            Start Improving Today
          </Button>
        </div>
      </div>
    </section>
  );
}
