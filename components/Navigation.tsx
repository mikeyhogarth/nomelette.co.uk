import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="text-right relative w-full">
      <button
        aria-label="Open Menu"
        className="md:hidden p-3 rounded-full hover:bg-primaryDarker"
        onClick={(e) => setOpen(!open)}
      >
        <FaBars />
      </button>

      <ul
        className={`${
          open ? "block" : "hidden"
        } md:inline-block list-none my-0 py-0`}
      >
        <NavLink href="/" text="Home" setOpen={setOpen} />
        <NavLink href="/recipes" text="Browse" setOpen={setOpen} />
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
    <li className="inline-block">
      <Link href={href}>
        <a className="hover:underline" onClick={() => setOpen(false)}>
          {text}
        </a>
      </Link>
    </li>
  );
}
