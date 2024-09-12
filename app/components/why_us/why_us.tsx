"use client";
import { Button } from "@/components/ui/button";
import {
  UsersIcon,
  TrendingUp,
  NotebookPen,
  MessageCircle,
} from "lucide-react";

export default function Why_us() {
  return (
    <section className="w-full bg-black text-white flex items-center justify-center py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className=" text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl  lg:text-6xl py-10">
            The ONLY way to Improve In Calisthenics is with Consistency...
          </h2>
          <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            But if you have that down, the FASTEST way to improve is by training
            with others who are at the same, or a higher skill Level than you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <div className="flex flex-col items-center space-y-4 text-center border-4 rounded-3xl py-12 bg-gradient-to-br from-indigo-900 to-indigo-400">
            <div className="bg-white/10 p-3 rounded-full border-4 border-white">
              <UsersIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Train Together</h3>
            <p className="text-gray-300 px-4">
              Meet new people with similar goals. Motivation
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center border-4 rounded-3xl py-12 bg-gradient-to-br from-indigo-900 to-indigo-400">
            <div className="bg-white/10 p-3 rounded-full border-4 border-white">
              <NotebookPen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Share Knowledge</h3>
            <p className="text-gray-300 px-4">
              Advanced Techniques, recovery, new exercises
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center border-4 rounded-3xl py-12 bg-gradient-to-br from-indigo-900 to-indigo-400">
            <div className="bg-white/10 p-3 rounded-full border-4 border-white">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Faster Results</h3>
            <p className="text-gray-300 px-4">
              Learn what works and what doesn't - less time wasted and more
              training optimally
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center border-4 bg-gradient-to-br from-indigo-900 to-indigo-400 rounded-3xl py-12">
            <div className="bg-white/10 p-3 rounded-full border-4 border-white">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Constant Feedback</h3>
            <p className="text-gray-300 px-4">
              Get feedback on your technique,
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            className="w-auto px-8 py-3 mt-12 rounded-full bg-indigo-600 hover:bg-indigo-400 text-white font-bold"
            onClick={() => (window.location.href = "/gymtalk+")}
          >
            Start Improving Today
          </Button>
        </div>
      </div>
    </section>
  );
}
