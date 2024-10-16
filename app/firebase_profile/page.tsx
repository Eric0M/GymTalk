"use client";
import { initFirebase } from "@/firebase";
import { getPremiumStatus } from "@/getUserPurchasedStatus";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const checkPremium = async () => {
      const newPremiumStatus = auth.currentUser
        ? await getPremiumStatus(app)
        : false;
      setIsPremium(newPremiumStatus);
    };
    checkPremium();
  }, [app, auth.currentUser?.uid]);

  // const statusPanel = isPremium ? <PremiumPanel /> : <StandardPanel />;

  return (
    <div className="flex flex-col gap-8">
      <h1>Welcome, {user?.displayName}</h1>
      {/* {statusPanel} */}
    </div>
  );
}
