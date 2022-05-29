import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Nomelette | The recipes of Sheila Hogarth</title>
        <meta
          name="description"
          content="Old school family recipes from the heart of Cumbria by Sheila Hogarth"
        />
        <link rel="icon" href="/favicon.ico" />

        {!(pageProps.statusCode === 404) && (
          <link
            rel="canonical"
            href={
              `https://nomelette.co.uk${
                router.asPath === "/" ? "" : router.asPath
              }`.split("?")[0]
            }
          />
        )}
        <meta name="author" content="Mikey" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nomelette" />
        <meta
          key="ogImage"
          property="og:image"
          content="/media/icons/android-chrome-192x192.png"
        />
        <meta
          key="twitterImage"
          name="twitter:image"
          content="/media/icons/android-chrome-192x192.png"
        />
        <meta
          key="ogDescription"
          property="og:description"
          content="Old school family recipes from the heart of Cumbria by Sheila Hogarth"
        />
        <meta name="twitter:creator" content="@MetalMikey666" />
      </Head>
      <header className="sticky top-0 z-50 px-10 bg-primary text-white print:hidden flex flex-row py-2 md:py-5">
        <h1 className="font-brand text-3xl drop-shadow-lg inline-block my-0 py-0">
          <Link href={`/`}>
            <a>Nomelette</a>
          </Link>
        </h1>

        <Navigation />
      </header>
      <main className="px-6 md:px-10 min-h-fit" style={{ minHeight: "60vh" }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
