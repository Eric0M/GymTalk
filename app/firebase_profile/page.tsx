"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { initFirebase } from "@/firebase";
import { getAuth } from "firebase/auth";
import Cookies from "js-cookie";

interface UserData {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

export default function AccountPage() {
  const app = initFirebase();
  const auth = getAuth(app);

  const userName = auth.currentUser?.displayName;
  const email = auth.currentUser?.email;

  const [userData, setUserData] = useState<UserData | null>(null);
  const router = useRouter();

  useEffect(() => {
    const sessionCookie = Cookies.get("session");
    const storedUserData = localStorage.getItem("userData");

    if (!sessionCookie || !storedUserData) {
      router.push("/?signin=true");
      return;
    }

    setUserData(JSON.parse(storedUserData));
  }, [router]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      <h1>Welcome, {email}</h1>
    </div>
  );
}
