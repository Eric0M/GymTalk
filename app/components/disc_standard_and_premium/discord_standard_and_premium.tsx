"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MessageCircleIcon,
  UsersIcon,
  ZapIcon,
  StarIcon,
  RocketIcon,
  ShieldIcon,
} from "lucide-react";

export default function Component() {
  return (
    <div className="py-12 md:py-24 lg:py-32 bg-black flex flex-col items-center justify-center p-4 space-y-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
        Improve your skills faster
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl">
        {/* Standard Server Card */}
        <Card className="w-full lg:w-1/2 bg-gray-800 text-gray-100">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Join Our Discord Community
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <MessageCircleIcon className="w-8 h-8 text-indigo-400" />
              <div>
                <h3 className="font-semibold">Engage in Discussions</h3>
                <p className="text-sm text-gray-400">
                  Connect with like-minded individuals and share ideas
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <UsersIcon className="w-8 h-8 text-indigo-400" />
              <div>
                <h3 className="font-semibold">Grow Your Network</h3>
                <p className="text-sm text-gray-400">
                  Meet new people and expand your professional circle
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ZapIcon className="w-8 h-8 text-indigo-400" />
              <div>
                <h3 className="font-semibold">Stay Updated</h3>
                <p className="text-sm text-gray-400">
                  Get the latest news and updates in real-time
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              onClick={() => {
                window.open("https://discord.gg/65Bn7YZj", "_blank");
              }}
            >
              Join Standard Server
            </Button>
          </CardFooter>
        </Card>

        {/* Premium Server Card */}
        <Card className="w-full lg:w-1/2 bg-gradient-to-br from-purple-900 to-indigo-900 text-gray-100 border-2 border-yellow-400">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              <span className="text-yellow-400">Premium</span> Discord
              Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <StarIcon className="w-8 h-8 text-yellow-400" />
              <div>
                <h3 className="font-semibold">Exclusive Channels</h3>
                <p className="text-sm text-gray-300">
                  Access to premium-only discussions and resources
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <RocketIcon className="w-8 h-8 text-yellow-400" />
              <div>
                <h3 className="font-semibold">Priority Support</h3>
                <p className="text-sm text-gray-300">
                  Get faster responses and dedicated assistance
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ShieldIcon className="w-8 h-8 text-yellow-400" />
              <div>
                <h3 className="font-semibold">Advanced Features</h3>
                <p className="text-sm text-gray-300">
                  Unlock powerful tools and integrations
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold"
              onClick={() => {
                window.open("/gymtalk+");
              }}
            >
              Upgrade to Premium
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
