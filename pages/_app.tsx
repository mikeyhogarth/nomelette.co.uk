import "../styles/app.css";
import { Footer, Link, Navigation } from "@/components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
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
      </Head>
      <header className="sticky top-0 z-50 flex flex-row bg-primary px-10 py-2 text-white md:py-5 print:hidden">
        <span className="my-0 inline-block py-0 font-brand text-3xl drop-shadow-md hover:drop-shadow-xl">
          <Link className="text-white no-underline" href={`/`}>
            Nomelette
          </Link>
        </span>

        <Navigation />
      </header>
      <main className="min-h-screen px-6 font-sans leading-loose tracking-wide md:px-10">
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </main>
      <Footer />
    </>
  );
}
