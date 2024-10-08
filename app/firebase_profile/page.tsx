"use client";
import { initFirebase } from "@/firebase";
import { getAuth } from "firebase/auth";

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

  return (
    <div className="flex flex-col gap-8">
      <h1>Welcome, {email}</h1>
    </div>
  );
}
