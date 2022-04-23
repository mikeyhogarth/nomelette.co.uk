import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1>
        <Link href={`/`}>
          <a>Nomelette</a>
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link href={`/`}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={`/books`}>
              <a>Books</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
