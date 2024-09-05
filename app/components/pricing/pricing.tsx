import React from "react";
import { Button } from "@/components/ui/button";
import "@/app/components/pricing/pricing.css";

interface PricingProps {
  title: string;
  price: string;
  features: string[];
}
const Pricing = (props: PricingProps) => {
  return (
    <div className=" flex flex-col text-white bg-base-300 border-2 rounded">
      <div className="text-center py-5 text-2xl border-b-2 font-bold bg-base-200">
        {props.title}
      </div>
      <div className="py-5 flex flex-row justify-center">
        <div className="text-3xl font-bold">{props.price}</div>
        <div className="flex self-end">/mo</div>
      </div>
      <div>
        <ul className="px-10 text-center">
          <li className="mx-10 my-2">{props.features[0]}</li>
          <li className="mx-10  my-2">{props.features[1]}</li>
          <li className="mx-10  my-2">{props.features[2]}</li>
        </ul>
      </div>
      <div className="px-10 flex justify-center my-5">
        <Button
          className="bg-base-300 border-green-600 text-green-600"
          variant="outline"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Pricing;
