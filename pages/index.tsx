import Head from "next/head";
import Link from "next/link";
import { Recipe } from "../types";
import { GetStaticProps } from "next";
import { allRecipes } from "../services/sanity/contentServices";
import Image from "next/image";
import homepageImage1 from "../public/media/images/homepage1.jpg";
import homepageImage2 from "../public/media/images/homepage2.jpg";
import homepageImage3 from "../public/media/images/homepage3.jpg";
import { FaCookieBite, FaCheese, FaHamburger } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nomelette</title>
        <meta name="description" content="Recipes of Shiela Hogarth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center mt-10">
        <Image
          className="rounded-full"
          src={homepageImage1}
          alt="Image representing home cooking"
          width={300}
          height={300}
        />
        <div className="hidden md:inline-block mx-10">
          <Image
            className="rounded-full hidden md:inline-block"
            src={homepageImage2}
            alt="Image representing home cooking"
            width={300}
            height={300}
          />
        </div>
        <div className="hidden xl:inline-block">
          <Image
            className="rounded-full "
            src={homepageImage3}
            alt="Image representing home cooking"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="text-center">
        <h2 className="font-brand text-primary lowercase tracking-tight text-6xl ">
          Nomelette
        </h2>
        <p className="text-4xl font-extrabold ">
          The recipes of Sheila Hogarth
        </p>

        <p className="md:px-20 my-10 text-xl">
          Welcome to over 40 years of classic family recipes created by
          Cumbria&apos;s renowned home cook Sheila Hogarth. Nomelette is full of
          traditional recipes from warming casseroles to delicious puddings.
        </p>

        <div className="mb-14">
          <Link href="/recipes">
            <a className="btn mx-2">Browse Recipes</a>
          </Link>
          <Link href="/about">
            <a className="btn btn-secondary mx-2">What is Nomelette?</a>
          </Link>
        </div>
        <FaCookieBite className="inline-block text-primary text-4xl" />
        <FaCheese className="inline-block text-primary text-4xl mx-20" />
        <FaHamburger className="inline-block text-primary text-4xl" />
      </div>
    </>
  );
}

// This function gets called at build time on server-side.
export const getStaticProps: GetStaticProps = async () => {
  const recipes = await allRecipes();
  return { props: { recipes } };
};
