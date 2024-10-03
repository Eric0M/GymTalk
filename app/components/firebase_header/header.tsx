"use client";

import { useState, useEffect } from "react";
import { NavItem } from "../navItems/navItems";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { AuthButton } from "../AuthButton/AuthButton";
import { useRouter } from "next/navigation";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
} from "firebase/auth";
import { initFirebase } from "@/firebase";
import Cookies from "js-cookie";
import Link from "next/link";

interface NavItemType {
  href: string;
  label: string;
  onClick?: (e: React.MouseEvent) => Promise<void>;
}

const baseNavItems: NavItemType[] = [
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/membership", label: "Membership" },
];

export default function Header() {
  const [session, setSession] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const app = initFirebase();
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      const newSession = !!user;
      setSession(newSession);
      if (newSession && user) {
        Cookies.set("session", "true", { expires: 7 });
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
  }, []);

  const handleProfileClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (session) {
      router.push("/firebase_profile");
    } else {
      const app = initFirebase();
      const auth = getAuth(app);
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

  const navItems: NavItemType[] = [
    ...baseNavItems,
    {
      href: "/firebase_profile",
      label: "Profile",
      onClick: handleProfileClick,
    },
  ];

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <span className="text-3xl font-bold text-indigo-600 hover:text-indigo-400 transition-colors duration-200 cursor-pointer">
                GymTalk
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex flex-grow justify-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  onClick={item.onClick}
                />
              ))}
            </div>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <AuthButton initialSession={session} onSessionChange={setSession} />
          </div>
          <MobileMenu navItems={navItems} initialSession={session} />
        </div>
      </div>
    </header>
  );
}
