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
import Cookies from "js-cookie";

interface AuthButtonProps {
  initialSession: boolean;
  onSessionChange?: (session: boolean) => void;
}

export function AuthButton({
  initialSession,
  onSessionChange,
}: AuthButtonProps) {
  const [session, setSession] = useState(initialSession);
  const router = useRouter();

  useEffect(() => {
    const app = initFirebase();
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      const newSession = !!user;
      setSession(newSession);
      onSessionChange?.(newSession);
      if (newSession && user) {
        Cookies.set("session", "true", { expires: 7 }); // Set cookie for 7 days
        localStorage.setItem(
          "userData",
          JSON.stringify({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      } else {
        Cookies.remove("session");
        localStorage.removeItem("userData");
      }
    });
    return () => unsubscribe();
  }, [onSessionChange]);

  const handleAuth = async () => {
    const app = initFirebase();
    const auth = getAuth(app);
    if (session) {
      await signOut(auth);
      Cookies.remove("session");
      localStorage.removeItem("userData");
      router.push("/");
    } else {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        if (result.user) {
          Cookies.set("session", "true", { expires: 7 }); // Set cookie for 7 days
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

  return (
    <Button
      className="bg-indigo-600 hover:bg-indigo-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
      onClick={handleAuth}
      aria-label={session ? "Sign Out" : "Sign In"}
    >
      {session ? "Sign Out" : "Sign In"}
    </Button>
  );
}
