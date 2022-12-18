import { GetStaticPaths, GetStaticProps } from "next";
import { Metadata, Pagination, RecipeList, Typography } from "@/components";
import {
  getAllTags,
  getRecipesTaggedWith,
} from "@/services/sanity/contentServices";
import { Recipe } from "@/types";
import { usePagination } from "@/hooks/usePagination";

interface Props {
  slug: string;
  recipes: Recipe[];
}

export default function RecipePage({ recipes, slug }: Props) {
  const { perPage, currentPage, setCurrentPage, getTotalPages, getPage } =
    usePagination();

  return (
    <div>
      <Metadata title={`Recipes tagged with ${slug}`} />

      <Typography el="h1">{slug}</Typography>
      {!!recipes.length && (
        <>
          <Typography el="p" className="mt-4">
            {recipes.length} recipe{recipes.length > 1 ? "s" : ""} tagged as{" "}
            <span className="font-bold">{slug}</span>.
          </Typography>
          <Pagination
            totalPages={getTotalPages(perPage, recipes)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          >
            <RecipeList recipes={getPage(recipes)} />
          </Pagination>
        </>
      )}
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
