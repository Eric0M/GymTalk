"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
};

export function MobileMenu({ navItems }: { navItems: NavItem[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession({
    required: false,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/profile");
    },
  });
  useEffect(() => {
    if (
      !session &&
      (pathname === "/profile" || pathname.startsWith("/protected"))
    ) {
      redirect("/api/auth/signin?callbackUrl=" + pathname);
    }
  }, [session, pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <X className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black">
          <div className="flex flex-col items-center justify-center h-full">
            {session
              ? [
                  ...navItems,
                  { href: "/api/auth/signout", label: "Logout" },
                  { href: "/profile", label: "Profile" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-4 text-xl font-medium hover:text-white ${
                      isActive(item.href) ? "text-white" : "text-gray-300"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))
              : [...navItems, { href: "/api/auth/signin", label: "Login" }].map(
                  (item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-3 py-4 text-xl font-medium hover:text-white ${
                        isActive(item.href) ? "text-white" : "text-gray-300"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                )}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <X className="block h-6 w-6" aria-hidden="true" />
              <span className="ml-2">Close</span>
            </button>
          </div>
        </div>
      )}

      {/* Active link highlighting for desktop menu */}
      <style jsx global>{`
        @media (min-width: 768px) {
          nav a[href="${pathname}"] {
            color: white;
          }
        }
      `}</style>
    </>
  );
}
