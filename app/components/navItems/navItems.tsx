import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
  className?: string;
  hasSession?: boolean;
  onClick?: (e: React.MouseEvent) => Promise<void>;
}

export function NavItem({
  href,
  label,
  className = "",
  onClick,
}: NavItemProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <Link href={href} passHref>
      <span
        className={`cursor-pointer text-white hover:text-indigo-400 transition-colors duration-200 ${className}`}
        onClick={handleClick}
      >
        {label}
      </span>
    </Link>
  );
}
