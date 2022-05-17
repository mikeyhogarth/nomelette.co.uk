import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { Recipe } from "../../types";
import Head from "next/head";
import {
  getRecipesTaggedWith,
  getAllTags,
} from "../../services/sanity/contentServices";

interface Props {
  slug: string;
  recipes: Recipe[];
}

export default function RecipePage({ recipes, slug }: Props) {
  return (
    <div>
      <Head>
        <title>Recipes tagged with {slug} | Nomelette</title>
      </Head>
      <h1>Recipes tagged with &quot;{slug}&quot;</h1>
      <ul>
        {recipes.map((r) => (
          <li key={r.name}>
            <Link href={`/recipes/${r.slug.current}`}>
              <a>{r.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// This function gets called at build time.
export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getAllTags();

  const paths = (tags || []).map((slug) => ({
    params: { slug },
  }));
  return { paths, fallback: "blocking" };
};

// This function gets called at build time.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug?.toString();
  const recipes = slug ? await getRecipesTaggedWith(slug) : [];
  return { props: { recipes, slug }, revalidate: 10 };
};
