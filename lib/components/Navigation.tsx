import { FaTimes as FaClose, FaBars as FaHamburgerMenu } from "react-icons/fa";
import Link from "@/components/Link";
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
        className={`fixed left-0 my-2 w-full list-none overflow-hidden bg-black py-0 text-center transition-height duration-500 ease-in-out md:relative md:my-0 md:inline-block md:bg-transparent md:text-right ${
          open ? "h-screen" : "h-0"
        } top-12 z-10 md:top-0 md:h-fit`}
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
  return (
    <li className="ml-6 py-4 text-2xl md:inline-block md:py-0 md:text-xl">
      <Link
        href={href}
        className="hover:underline"
        onClick={() => setOpen(false)}
      >
        {text}
      </Link>
    </li>
  );
}
