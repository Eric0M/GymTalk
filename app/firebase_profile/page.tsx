"use client";
import { initFirebase } from "@/firebase";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";

interface UserData {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

export default function AccountPage() {
  const app = initFirebase();
  const auth = getAuth(app);
  const router = useRouter();

  const user = auth.currentUser;
  if (!user) {
    router.push("/login");
  }

  return (
    <div className="flex flex-col gap-8">
      <h1>Welcome, {user?.displayName}</h1>
    </div>
  );
}
