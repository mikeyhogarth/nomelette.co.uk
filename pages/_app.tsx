import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Navigation from "../components/Navigation";

//const marginClasses = "px-5 mb-20 lg:px-20 xl:px-40 pt-6 md:pt-16";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="px-10 bg-primary text-white print:hidden flex flex-row">
        <h1 className="font-brand text-3xl drop-shadow-lg inline-block">
          <Link href={`/`}>
            <a>Nomelette</a>
          </Link>
        </h1>

        <Navigation />
      </header>
      <main className="px-10">
        <Component {...pageProps} />
      </main>
    </>
  );
}
