import { FaTimes as FaClose, FaBars as FaHamburgerMenu } from "react-icons/fa";
import Link from "@/components/Link";
import { clsx } from "clsx";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative w-full text-right">
      <button
        className="rounded-full p-3 text-xl transition hover:backdrop-brightness-75 md:hidden"
        aria-label="Open Menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaClose /> : <FaHamburgerMenu />}
      </button>

      <ul
        className={clsx(
          "fixed left-0 top-12 z-10 my-2 w-full list-none overflow-hidden bg-black py-0 text-center transition-height duration-500 ease-in-out md:relative md:top-1 md:my-0 md:inline-block md:h-8 md:bg-transparent md:text-right",
          open && "h-screen",
          !open && "h-0"
        )}
      >
        <NavLink href="/" text="Home" setOpen={setOpen} />
        <NavLink href="/about" text="About" setOpen={setOpen} />
        <NavLink href="/recipes" text="Browse" setOpen={setOpen} />
        <NavLink href="/search" text="Search" setOpen={setOpen} />
        <NavLink href="/books" text="Books" setOpen={setOpen} />
      </ul>
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  text: string;
  setOpen: (setOpen: boolean) => void;
}

function NavLink({ href, text, setOpen }: NavLinkProps) {
  const router = useRouter();
  const active = router.pathname === href;
  return (
    <li className="ml-6 py-4 text-2xl md:inline-block md:py-0 md:text-xl">
      <Link
        href={href}
        className={clsx(
          active && "underline decoration-4 underline-offset-4",
          "hover:underline"
        )}
        onClick={() => setOpen(false)}
      >
        {text} {active}
      </Link>
    </li>
  );
}
