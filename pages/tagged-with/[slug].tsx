import { GetStaticPaths, GetStaticProps } from "next";
import { Metadata, RecipeList, Typography } from "@/components";
import {
  getAllTags,
  getRecipesTaggedWith,
} from "@/services/sanity/contentServices";
import { Recipe } from "@/types";

interface Props {
  slug: string;
  recipes: Recipe[];
}

export default function RecipePage({ recipes, slug }: Props) {
  return (
    <div>
      <Metadata title={`Recipes tagged with ${slug}`} />

      <Typography el="h1">{slug}</Typography>
      {!!recipes.length && <RecipeList recipes={recipes} />}
      {!recipes.length && (
        <Typography el="p">
          Very sorry - there are no recipes tagged with <strong>{slug}</strong>
        </Typography>
      )}
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getAllTags();

  const paths = (tags || []).map((slug) => ({
    params: { slug },
  }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug?.toString();
  const recipes = slug ? await getRecipesTaggedWith(slug) : [];
  return { props: { recipes, slug }, revalidate: 10 };
};
