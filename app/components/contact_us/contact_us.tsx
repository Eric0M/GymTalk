import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto bg-zinc-900 text-gray-100">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-100">
            Contact Us
          </CardTitle>
          <CardDescription className="text-gray-400">
            We would love to hear from you.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">
              For all Personal Inquiries
            </h3>
            <a
              href="mailto:business@ericmacrae.com"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-200 transition-colors"
            >
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              business@ericmacrae.com
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">
              For all Gymtalk Inquiries
            </h3>
            <a
              href="mailto:gymtalk.ca@gmail.com"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-200 transition-colors"
            >
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              gymtalk.ca@gmail.com
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
