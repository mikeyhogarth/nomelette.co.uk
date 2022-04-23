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
    <div>
      <Head>
        <title>Nomelette</title>
        <meta name="description" content="Recipes of Shiela Hogarth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ul>
          {recipes.map((r) => (
            <li key={r.name}>
              <Link href={`/recipes/${r.slug.current}`}>
                <a>{r.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

// This function gets called at build time on server-side.
export const getStaticProps: GetStaticProps = async () => {
  const recipes = await allRecipes();
  return { props: { recipes } };
};
