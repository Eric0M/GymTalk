import React from "react";
import Membership_Tiers from "../components/disc_standard_and_premium/discord_standard_and_premium";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const page = async function () {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/api/auth/signin");
  }
  return <Membership_Tiers />;
};

export default page;
