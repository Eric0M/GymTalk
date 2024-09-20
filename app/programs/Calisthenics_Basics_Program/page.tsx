"use client";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { model } from "mongoose";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import CheckoutPage from "@/components/CheckoutPage";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY_TEST) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY_TEST is not defined");
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY_TEST as string
);

const StripePageAdvancedProgram = () => {
  const Beginner = 19.99;
  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "payment",
        amount: convertToSubcurrency(Beginner),
        currency: "usd",
      }}
    >
      <CheckoutPage
        amount={Beginner}
        imageUrl="/Front_Lever.PNG"
        programName="Beginner Calistenics Program"
      />
    </Elements>
  );
};

export default StripePageAdvancedProgram;
