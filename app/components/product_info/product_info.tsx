"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Dumbbell } from "lucide-react";
import Link from "next/link";
import { constants } from "@/constants";
import { FirebaseAuth } from "../product_firebase/product_firebase";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { initFirebase } from "@/firebase";
import Cookies from "js-cookie";

interface ProductPageProps {
  title?: string;
  imageUrl?: string;
  ft1?: string;
  ft2?: string;
  ft3?: string;
  description?: string;
  price?: string;
  detail?: Record<string, string>;
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
}: ProductPageProps) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const app = initFirebase();
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        Cookies.set("session", "true", { expires: 7 });
        localStorage.setItem(
          "userData",
          JSON.stringify({
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            email: currentUser.email,
            photoURL: currentUser.photoURL,
          })
        );
      } else {
        Cookies.remove("session");
        localStorage.removeItem("userData");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleAuth = async () => {
    const app = initFirebase();
    const auth = getAuth(app);
    if (user) {
      await signOut(auth);
      Cookies.remove("session");
      localStorage.removeItem("userData");
      router.push("/");
    } else {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        if (result.user) {
          Cookies.set("session", "true", { expires: 7 });
          localStorage.setItem(
            "userData",
            JSON.stringify({
              uid: result.user.uid,
              displayName: result.user.displayName,
              email: result.user.email,
              photoURL: result.user.photoURL,
            })
          );
          router.push("/firebase_profile");
        }
      } catch (error) {
        console.error("Error during sign in:", error);
      }
    }
  };

  const handleBuyNow = () => {
    if (!user) {
      handleAuth();
    } else {
      window.open(
        `${constants[2].TestLink}?prefilled_email=${user.email || ""}`,
        "_blank"
      );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-center px-4">
        <div className="relative w-full max-w-sm mx-auto aspect-square rounded-lg overflow-hidden">
          <Image
            src={imageUrl as string}
            alt={`${title} Image`}
            width={400}
            height={400}
            className="object-cover hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold pb-4">
          {title}
        </h1>
        <Button
          className="w-full max-w-xs mx-auto bg-indigo-600 text-white hover:bg-indigo-400 text-lg py-6"
          onClick={handleBuyNow}
        >
          Buy Now {price}
        </Button>
        <ul className="space-y-2 text-left max-w-md mx-auto">
          <li className="flex items-center">
            <Dumbbell className="mr-2 h-5 w-5 text-indigo-600 flex-shrink-0" />
            <span>{ft1}</span>
          </li>
          <li className="flex items-center">
            <Dumbbell className="mr-2 h-5 w-5 text-indigo-600 flex-shrink-0" />
            <span>{ft2}</span>
          </li>
          <li className="flex items-center">
            <Dumbbell className="mr-2 h-5 w-5 text-indigo-600 flex-shrink-0" />
            <span>{ft3}</span>
          </li>
        </ul>
        <h3 className="text-xl font-semibold">Description</h3>
        <p className="text-gray-300 max-w-prose mx-auto text-lg">
          {description}
        </p>
        <h3 className="text-xl font-semibold">What's Included</h3>
        {detail &&
          Object.values(detail).map((benefit, index) => (
            <ul key={index} className="space-y-2 text-left max-w-md mx-auto">
              <li className="flex items-center">
                <Check className="mr-2 h-5 w-5 text-white flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
}
