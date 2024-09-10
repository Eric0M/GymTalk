"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              GymTalk
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/programs" className="hover:text-gray-300">
              Programs
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
            <Link href="/gymtalk+" className="hover:text-gray-300">
              Gymtalk+
            </Link>
          </nav>
          <div className="hidden md:block">
            <Link href="/login" className="hover:text-gray-300">
              Login
            </Link>
          </div>
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
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700"
            >
              Contact
            </Link>
            <Link
              href="/programs"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700"
            >
              Programs
            </Link>
            <Link
              href="/gymtalk+"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700"
            >
              Gymtalk+
            </Link>
            <Link
              href="/login"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
