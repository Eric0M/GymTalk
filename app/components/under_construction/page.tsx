import { AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Component() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-gray-100">
      <Card className="w-full max-w-md bg-gray-800 border-gray-700">
        <CardContent className="flex flex-col items-center space-y-6 p-6">
          <div className="relative">
            <AlertTriangle className="w-24 h-24 text-indigo-600" />
            <div className="absolute inset-0 bg-indigo-600 rounded-full blur-xl opacity-50 animate-pulse" />
          </div>
          <h1 className="text-3xl font-bold text-center">
            Sorry, this program is not available yet!
          </h1>
          <p className="text-center text-gray-400">
            We are currently working on this program and will be available soon.
            Please check back later.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
