import { getServerSession } from "next-auth";
import { options } from "../../api/auth/[...nextauth]/options";
import Link from "next/link";
import { MobileMenu } from "../MobileMenu/MobileMenu";

const navItems = [
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/membership", label: "Membership" },
];

export default async function Header() {
  const session = await getServerSession(options);

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              GymTalk
            </Link>
          </div>
          <nav className="hidden md:flex flex-grow justify-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-500 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <>
                <Link
                  href="/profile"
                  className="text-gray-500 hover:text-white"
                >
                  Profile
                </Link>
                <Link
                  href="/api/auth/signout?callbackUrl=/"
                  className="text-gray-500 hover:text-white"
                >
                  Logout
                </Link>
              </>
            ) : (
              <Link
                href="/api/auth/signin"
                className="text-gray-500 hover:text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
