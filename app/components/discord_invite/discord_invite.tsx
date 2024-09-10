"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageCircleIcon, UsersIcon, ZapIcon } from "lucide-react";

export default function Discord() {
  return (
    <div className="bg-gray-900 flex items-center justify-center p-4 py-12 md:py-24 lg:py-32">
      <Card className="w-full max-w-md bg-gray-800 text-gray-100">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Join Our Community
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
            Click to Join
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
