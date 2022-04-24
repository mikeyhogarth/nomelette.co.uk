import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="text-right relative w-full">
      <ul className="list-none">
        <li className="inline-block">
          <Link href={`/`}>
            <a>Home</a>
          </Link>
        </li>
        <li className="inline-block">
          <Link href={`/recipes`}>
            <a>Browse</a>
          </Link>
        </li>
        <li className="inline-block">
          <Link href={`/books`}>
            <a>Books</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
