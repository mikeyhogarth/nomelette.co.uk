import Head from "next/head";
import Link from "next/link";
import { Recipe } from "../types";
import { GetStaticProps } from "next";
import { allRecipes } from "../services/sanity/contentServices";

interface Props {
  recipes: Recipe[];
}

export default function Home({ recipes }: Props) {
  return (
    <>
      <Head>
        <title>Nomelette</title>
        <meta name="description" content="Recipes of Shiela Hogarth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Home page content</p>
    </>
  );
}

// This function gets called at build time on server-side.
export const getStaticProps: GetStaticProps = async () => {
  const recipes = await allRecipes();
  return { props: { recipes } };
};
