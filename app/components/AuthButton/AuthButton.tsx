"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  User,
} from "firebase/auth";
import { initFirebase } from "@/firebase";

interface AuthButtonProps {
  initialSession: boolean;
  onSessionChange?: (session: boolean) => void;
}

export function AuthButton({
  initialSession,
  onSessionChange,
}: AuthButtonProps) {
  const router = useRouter();
  const app = initFirebase();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    if (user) {
      router.push("/firebase_profile");
    }
  };

  const signOut = () => {
    auth.signOut();
    router.push("/");
  };

  return (
    <>
      {auth.currentUser ? (
        <Button
          className="bg-indigo-600 hover:bg-indigo-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
          onClick={signOut}
        >
          Sign Out
        </Button>
      ) : (
        <Button
          className="bg-indigo-600 hover:bg-indigo-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
          onClick={signIn}
        >
          Sign In
        </Button>
      )}
    </>
  );
}
