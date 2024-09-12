"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github } from "lucide-react";

export default function LoginScreen() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-zinc-900 text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription className="text-zinc-400">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-200">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="bg-zinc-800 border-zinc-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-zinc-200">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                required
                className="bg-zinc-800 border-zinc-700 text-white"
              />
            </div>
            <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-400">
              Log in
            </Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-zinc-900 px-2 text-zinc-400">Or</span>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full bg-white text-black hover:bg-zinc-200 hover:text-black"
          >
            <Github className="mr-2 h-4 w-4" />
            Continue with Google
          </Button>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-zinc-400">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-indigo-400 hover:underline hover:text-indigo-200"
              onClick={() => {
                window.location.href = "/register";
              }}
            >
              Sign up
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
