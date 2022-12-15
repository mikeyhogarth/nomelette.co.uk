import Link from "../components/Link";
import { FaBars as FaHamburgerMenu, FaTimes as FaClose } from "react-icons/fa";
import { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative w-full text-right">
      <button aria-label="Open Menu" onClick={(e) => setOpen(!open)}>
        {open ? <FaClose /> : <FaHamburgerMenu />}
      </button>

      <ul
        className={`${open ? "h-screen" : "h-0"} top-12 z-10 md:top-0 md:h-fit`}
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
  setOpen: (isOpen: boolean) => void;
}

function NavLink({ href, text, setOpen }: NavLinkProps) {
  return (
    <li className="md:inline-block">
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
