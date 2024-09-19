"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Button } from "./ui/button";
import Image from "next/image";
interface CheckoutPageProps {
  amount: number;
  imageUrl: string;
  programName: string;
}
const CheckoutPage: React.FC<CheckoutPageProps> = ({
  amount,
  imageUrl,
  programName,
}) => {
  {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState<string>();
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
        });
    }, [amount]);

    return (
      <div className="min-h-screen bg-black text-white flex flex-col">
        <div className="py-6 sm:py-8 md:py-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4 sm:px-6 md:px-8 lg:px-12">
            You Are One Step Away From Taking Your Calisthenics To The Next
            Level
          </h1>
        </div>

        <div className="flex flex-col w-full max-w-[1400px] mx-auto flex-grow px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8">
            <div className="w-full lg:w-1/2 xl:w-3/5">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
                Program name: {programName}
              </h2>
              <p className="text-xl sm:text-2xl">Price: ${amount}</p>
            </div>
            <div className="w-full lg:w-5/12 xl:w-2/5">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Secure Checkout
              </h2>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="w-full lg:w-1/2 xl:w-3/5">
              <div className="relative w-full pt-[56.25%] overflow-hidden rounded-lg">
                <Image
                  src={imageUrl}
                  alt="Calisthenics Program"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="w-full lg:w-5/12 xl:w-2/5">
              <div className="p-6 rounded-lg shadow-lg bg-white text-black w-full">
                {clientSecret && <PaymentElement />}
                <Button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 text-lg font-semibold">
                  Pay Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      // <>
      //   <h1 className="text-4xl font-bold text-white bg-black text-center py-20 px-90 md:px-12 lg:px-16 xl:px-70">
      //     You Are One Step Away From Taking Your Calisthenics To The Next Level
      //   </h1>
      //   <div className="min-h-screen bg-black flex flex-row justify-evenly ">
      //     <h2 className="text-2xl text-white m-4 ">
      //       Program name : Price: ${amount}
      //     </h2>
      //     <div className="w-full max-w-md text-white text-center">
      //       <h2 className="text-3xl font-bold text-white m-4">Secure Checkout</h2>
      //       <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white">
      //         {clientSecret && <PaymentElement />}
      //         <Button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-400">
      //           Pay Now
      //         </Button>
      //       </div>
      //     </div>
      //   </div>
      // </>
    );
  }
};

export default CheckoutPage;
