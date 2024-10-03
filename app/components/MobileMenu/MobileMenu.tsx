import { useState } from "react";
import { NavItem } from "../navItems/navItems";
import { AuthButton } from "../AuthButton/AuthButton";

interface NavItemType {
  href: string;
  label: string;
  onClick?: (e: React.MouseEvent) => Promise<void>;
}

interface MobileMenuProps {
  navItems: NavItemType[];
  initialSession: boolean;
}

export function MobileMenu({ navItems, initialSession }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? "✕" : "☰"}
      </button>
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-black p-4">
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={item.label}
              onClick={item.onClick}
              className="block py-2"
            />
          ))}
          <AuthButton initialSession={initialSession} />
        </div>
      )}
    </div>
  );
}
