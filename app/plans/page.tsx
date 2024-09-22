import PricingComponent from "@/app/components/pricing/pricing";
import React from "react";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const page = async function () {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/api/auth/signin");
  }
  return <PricingComponent />;
};

export default page;
