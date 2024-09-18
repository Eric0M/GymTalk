"use client";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { constants } from "@/constants";
export default function PricingComponent() {
  const tiers = [
    {
      name: "Basic",
      price: "$9.99",
      features: [
        "Access to Premium Server and Resources",
        "Weekly Newsletter",
        "Meet other like-minded people that share similar goals",
      ],
    },
    {
      name: "Pro",
      price: "$19.99",
      features: [
        "All Basic features",
        "Weekly group discussions lead by Eric with others at similar skill levels",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "$49.99",
      features: [
        "All Pro features",
        "1 on 1 coaching sessions and discussions",
        "Unlimited Support and feedback from Eric",
        "Custom workout plans and training programs",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pb-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Choose Your Level
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Cancel anytime. No hidden fees.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-stretch w-full">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-sm lg:w-auto lg:flex-1 flex flex-col relative ${
                tier.popular ? "border-2 border-yellow-400" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-yellow-400 text-black text-sm font-bold py-1 px-4 rounded-full">
                    Popular
                  </span>
                </div>
              )}
              <div className="flex-grow">
                <h3
                  className={`text-2xl font-bold ${
                    tier.popular ? "text-yellow-400" : ""
                  }`}
                >
                  {tier.name}
                </h3>
                <p className="mt-4 text-4xl font-extrabold">
                  {tier.price}
                  <span className="text-xl font-normal text-gray-300">
                    /month
                  </span>
                </p>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="flex-shrink-0 w-5 h-5 text-indigo-400" />
                      <span className="ml-3">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                // Change the testlink to be tier.name and make each link named the same as the tier
                onClick={() => {
                  window.open(constants.paymentLinks.TestLink, "_blank");
                }}
                className={`mt-8 w-full ${
                  tier.popular
                    ? "bg-yellow-400 hover:bg-yellow-300 text-black"
                    : "bg-indigo-600 hover:bg-indigo-400 text-white"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
