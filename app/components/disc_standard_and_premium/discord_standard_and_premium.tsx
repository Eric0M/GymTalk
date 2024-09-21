import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MessageCircle,
  Users,
  Zap,
  SquarePen,
  CalendarCheck,
  Presentation,
} from "lucide-react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../../api/auth/[...nextauth]/options";

export default function Membership_Tiers({ session }: any) {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 space-y-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
        Unlock your potential: Master your skills today!
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl">
        <Card className="w-full lg:w-1/2 bg-gray-800 text-gray-100 flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Join Our Community
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 flex-grow">
            <div className="flex items-start space-x-4">
              <MessageCircle className="w-8 h-8 text-indigo-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Engage in Discussions</h3>
                <p className="text-sm text-gray-400">
                  Ask questions and get answers from advanced athletes
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="w-8 h-8 text-indigo-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">
                  Meet People with Similar Goals to You
                </h3>
                <p className="text-sm text-gray-400">
                  Join a Community of People Striving for Improvement
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Zap className="w-8 h-8 text-indigo-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Accelerate your Growth</h3>
                <p className="text-sm text-gray-400">
                  Stay Motivated and Keep up to Date With Advanced Techniques
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="https://discord.gg/65Bn7YZj" className="w-full">
              <Button className="w-full bg-indigo-600 hover:bg-indigo-400 text-white">
                Get Started
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="w-full lg:w-1/2 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 border-2 border-yellow-400 flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Join <span className="text-yellow-400">GymTalk+</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 flex-grow">
            <div className="flex items-start space-x-4">
              <SquarePen className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Exclusive Channels</h3>
                <p className="text-sm text-gray-300">
                  Access to premium-only discussions and resources
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Presentation className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Weekly Meetings with Experts</h3>
                <p className="text-sm text-gray-300">
                  Get the right answer to your questions in real time
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CalendarCheck className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Custom Programming</h3>
                <p className="text-sm text-gray-300">
                  Plans that are tailored to you to optimize your performance
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            {session ? (
              <Link href="/membership/plans" className="w-full">
                <Button className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold">
                  Upgrade to Premium
                </Button>
              </Link>
            ) : (
              <Link href="/api/auth/signin" className="w-full">
                <Button className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold">
                  Get Started
                </Button>
              </Link>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
export async function getServerSideProps({ context }: any) {
  const session = await getServerSession(context.req, context.res, options);
  console.log("Session:", session);
  return {
    props: { session },
  };
}
