import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { initFirebase } from "@/firebase";
import { getAuth } from "firebase/auth";

export default function Component({
  userEmail = "user@example.com",
}: {
  userEmail?: string;
}) {
  const stripeBillingUrl =
    "https://billing.stripe.com/p/login/3cs17k47yfvveKk288";

  const app = initFirebase();
  const auth = getAuth(app);

  const user = auth.currentUser;

  return (
    <div className="flex justify-center items-center min-h-screen bg-black p-4">
      <Card className="w-full max-w-md bg-gray-900 text-white">
        <CardHeader>
          <CardTitle>Hi, {user?.displayName}</CardTitle>
          <CardDescription className="text-gray-400">
            Manage your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-400 mb-4">
            You can update your details or manage your billing through the
            button below.
          </p>
        </CardContent>
        {/* CHANGE THE STRIPE BILLING LINK TO NON TEST MODE */}
        <CardFooter className="flex justify-center">
          <Link
            href={`${stripeBillingUrl}?prefilled_email=${user?.email}`}
            target="_blank"
          >
            <Button
              variant="default"
              className="bg-indigo-600 hover:bg-indigo-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
            >
              Manage Billing <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
