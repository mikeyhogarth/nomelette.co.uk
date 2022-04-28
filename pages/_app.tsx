import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

//const marginClasses = "px-5 mb-20 lg:px-20 xl:px-40 pt-6 md:pt-16";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="px-10 bg-primary text-white print:hidden flex flex-row py-2 md:py-5">
        <h1 className="font-brand text-3xl drop-shadow-lg inline-block my-0 py-0">
          <Link href={`/`}>
            <a>Nomelette</a>
          </Link>
        </h1>

        <Navigation />
      </header>
      <main className="px-10 min-h-fit" style={{ minHeight: "60vh" }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}