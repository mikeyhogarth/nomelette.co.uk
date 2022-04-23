import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { Recipe } from "../../types";
import Head from "next/head";
import { allSlugs, getRecipe } from "../../services/sanity/contentServices";
import IngredientsBlock from "../../components/IngredientsBlock";
import MethodBlock from "../../components/MethodBlock";

interface Props {
  recipe: Recipe;
}

export default function RecipePage({ recipe }: Props) {
  return (
    <div>
      <Head>
        <title>{recipe.name} | Nomelette</title>
      </Head>
      <h1>{recipe.name}</h1>
      <ul>
        {recipe.tags.map((tag) => (
          <li key={tag}>
            <Link href={`/tagged-with/${tag}`}>
              <a>#{tag}</a>
            </Link>
          </li>
        ))}
      </ul>
      <PortableText value={recipe.description} />
      <dl>
        {recipe.preparation_time && (
          <>
            <dt>Preparation Time</dt>
            <dd>{recipe.preparation_time}</dd>
          </>
        )}
        {recipe.cooking_time && (
          <>
            <dt>Cooking Time</dt>
            <dd>{recipe.cooking_time}</dd>
          </>
        )}
        {recipe.serves && (
          <>
            <dt>Serves</dt>
            <dd>{recipe.serves}</dd>
          </>
        )}
      </dl>
      <IngredientsBlock content={recipe.ingredients} />
      <MethodBlock content={recipe.method} />
      <PortableText value={recipe.footnote} />
    </div>
  );
}

// This function gets called at build time.
export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await allSlugs("recipe");
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
};

// This function gets called at build time.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const recipe = await getRecipe(params?.slug?.toString() || "");
  return { props: { recipe } };
};
