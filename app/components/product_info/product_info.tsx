"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Dot, ChevronDown, ChevronUp } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { initFirebase } from "@/firebase";
import { handleCheckout } from "@/checkout";
import { useState } from "react";

interface ProductPageProps {
  title?: string;
  imageUrl?: string;
  ft1?: string;
  ft2?: string;
  ft3?: string;
  description?: string;
  price?: string;
  detail?: Record<string, string>;
  priceId?: string;
}

export default function ProductPage({
  title,
  imageUrl,
  description,
  ft1,
  ft2,
  ft3,
  price,
  detail,
  priceId,
}: ProductPageProps) {
  const app = initFirebase();
  const auth = getAuth(app);
  const user = auth.currentUser;

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/2">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image
              src={imageUrl as string}
              alt={`${title} Image`}
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-6 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            {title}
          </h1>
          <Button
            className="w-full max-w-xs bg-indigo-600 text-white hover:bg-indigo-400 text-lg py-6"
            onClick={() => priceId && handleCheckout(priceId)}
          >
            Buy Now {price}
          </Button>
          <div className="w-full h-px bg-gray-800"></div>
          <ul className="space-y-2 w-full">
            <li className="flex items-center">
              <Dot className="mr-2 h-8 w-8 text-white flex-shrink-0" />
              <span>{ft1}</span>
            </li>
            <li className="flex items-center">
              <Dot className="mr-2 h-8 w-8 text-white flex-shrink-0" />
              <span>{ft2}</span>
            </li>
            <li className="flex items-center">
              <Dot className="mr-2 h-8 w-8 text-white flex-shrink-0" />
              <span>{ft3}</span>
            </li>
          </ul>
          <div className="w-full h-px bg-gray-800"></div>
          <div className="w-full">
            <button
              className="flex justify-between items-center w-full text-xl font-semibold"
              onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
              aria-expanded={isDescriptionOpen}
              aria-controls="description-content"
            >
              <span>Description</span>
              {isDescriptionOpen ? (
                <ChevronUp className="h-6 w-6" />
              ) : (
                <ChevronDown className="h-6 w-6" />
              )}
            </button>
            {isDescriptionOpen && (
              <p
                id="description-content"
                className="text-gray-300 text-lg mt-2"
              >
                {description}
              </p>
            )}
          </div>
          <div className="w-full h-px bg-gray-800"></div>
          <div className="w-full">
            <button
              className="flex justify-between items-center w-full text-xl font-semibold"
              onClick={() => setIsDetailsOpen(!isDetailsOpen)}
              aria-expanded={isDetailsOpen}
              aria-controls="details-content"
            >
              <span>What's Included</span>
              {isDetailsOpen ? (
                <ChevronUp className="h-6 w-6" />
              ) : (
                <ChevronDown className="h-6 w-6" />
              )}
            </button>
            {isDetailsOpen && (
              <div id="details-content" className="mt-2">
                {detail &&
                  Object.values(detail).map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 mb-2"
                    >
                      <Check className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
