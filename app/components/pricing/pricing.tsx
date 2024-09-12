import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingComponent() {
  const tiers = [
    {
      name: "Basic",
      price: "$9.99",
      features: ["Access to Premium Server", "Form Checker"],
    },
    {
      name: "Pro",
      price: "$19.99",
      features: ["All Basic features", "Weekly group discussions with Eric"],
    },
    {
      name: "Enterprise",
      price: "$49.99",
      features: [
        "All Pro features",
        "1 on 1 coaching sessions and discussions",
        "Unlimited Support and feedback from Eric",
        "Free program choice after purchase",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pb-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Simple, transparent pricing for everyone.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-stretch w-full">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className="bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-sm lg:w-auto lg:flex-1 flex flex-col"
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
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
              <Button className="mt-8 w-full bg-indigo-600 hover:bg-indigo-400 text-white">
                {index === 2 ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
