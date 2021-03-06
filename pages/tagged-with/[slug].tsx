import { GetStaticProps, GetStaticPaths } from "next";
import { Recipe } from "../../types";
import Head from "next/head";
import RecipeList from "../../components/RecipeList";
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
        <title>{slug} | Nomelette</title>
      </Head>
      <h1>{slug}</h1>
      {!!recipes.length && <RecipeList recipes={recipes} />}
      {!recipes.length && (
        <p>
          Very sorry - there are no recipes tagged with <strong>{slug}</strong>
        </p>
      )}
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
