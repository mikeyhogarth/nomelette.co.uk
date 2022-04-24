import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="bg-primary text-white print:hidden">
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
      </header>
      <main className="px-5 mb-20 lg:px-20 xl:px-40 pt-6 md:pt-16">
        <Component {...pageProps} />
      </main>
    </>
  );
}
