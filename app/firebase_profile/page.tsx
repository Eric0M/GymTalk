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

  const user = auth.currentUser;
  if (!user) {
    window.location.href = "/login";
  }

  return (
    <div className="flex flex-col gap-8">
      <h1>Welcome, {user?.displayName}</h1>
    </div>
  );
}
