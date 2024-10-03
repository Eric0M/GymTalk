"use client";
import { initFirebase } from "@/firebase";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { useRouter } from "next/navigation";

const app = initFirebase();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const router = useRouter();

export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);

  const user = result.user;
  if (user) {
    router.push("/firebase_profile");
  }
};

export const handleSignOut = async () => {
  await signOut(auth);
  router.push("/");
};
