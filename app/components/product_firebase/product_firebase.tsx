"use client";

import { useEffect, useState } from "react";
import { initFirebase } from "@/firebase";
import { getAuth, User } from "firebase/auth";

interface FirebaseAuthProps {
  children: React.ReactNode;
  onUserChange: (user: User | null) => void;
}

export function FirebaseAuth({ children, onUserChange }: FirebaseAuthProps) {
  useEffect(() => {
    const app = initFirebase();
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      onUserChange(user);
      if (user) {
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
        localStorage.removeItem("userData");
      }
    });
    return () => unsubscribe();
  }, [onUserChange]);

  return <>{children}</>;
}
