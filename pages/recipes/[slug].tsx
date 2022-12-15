import { FaClock, FaUserClock, FaUserFriends } from "react-icons/fa";
import { GetStaticPaths, GetStaticProps } from "next";
import { allSlugs, getRecipe } from "@/services/sanity/contentServices";
import Callout from "@/components/Callout";
import Head from "next/head";
import Image from "next/image";
import IngredientsBlock from "@/components/IngredientsBlock";
import Metadata from "@/components/Metadata";
import MethodBlock from "@/components/MethodBlock";
import { Recipe } from "@/types";
import RichText from "@/components/RichText";
import TagList from "@/components/TagList";
import Typography from "@/components/Typography";
import { toPlainText } from "@portabletext/react";
import { urlForImage } from "@/services/sanity/imageServices";

interface Props {
  recipe: Recipe;
}

export default function RecipePage({ recipe }: Props) {
  return (
    <>
      <Metadata title={recipe.name} />

      <Head>
        {recipe.image && (
          <>
            <meta
              key="ogImage"
              property="og:image"
              content={urlForImage(recipe.image).url()}
            />
            <meta
              key="twitterImage"
              name="twitter:image"
              content={urlForImage(recipe.image).url()}
            />
          </>
        )}
        <meta
          key="ogDescription"
          property="og:description"
          content={`Recipe for ${recipe.name} by Sheila Hogarth`}
        />
      </Head>
      <article className="recipe" vocab="http://schema.org/" typeof="Recipe">
        <Typography el="h1" property="name">
          {recipe.name}
        </Typography>
        {recipe.image && (
          <figure className="w-fit border border-gray-200 bg-gray-100 px-2 py-2 md:inline-block lg:float-right lg:ml-4 lg:mb-4 lg:inline print:hidden">
            <Image
              src={urlForImage(recipe.image).width(500).height(500).url()}
              alt={`Picture of ${recipe.name}`}
              property="image"
              width={500}
              height={500}
            />
            <figcaption className="pt-2 text-center italic">
              {recipe.name}
            </figcaption>
          </figure>
        )}

        <TagList tags={recipe.tags} />

        <div property="description">
          {recipe.description && toPlainText(recipe.description).length > 0 && (
            <RichText value={recipe.description} />
          )}
        </div>
        {(recipe.preparation_time || recipe.cooking_time || recipe.serves) && (
          <dl className="mt-6 flex flex-row flex-wrap border md:w-96">
            {recipe.preparation_time && (
              <>
                <dt className="basis-6/12 border-r bg-gray-100 p-2 font-semibold text-gray-700">
                  <FaUserClock className="mr-1 inline-block" />
                  Preparation
                </dt>
                <dd
                  className="flex-grow basis-6/12 overflow-hidden bg-gray-50 p-2 italic"
                  property="prepTime"
                >
                  {recipe.preparation_time}
                </dd>
              </>
            )}
            {recipe.cooking_time && (
              <>
                <dt className="basis-6/12 border-r bg-gray-100 p-2 font-semibold text-gray-700">
                  <FaClock className="mr-1 inline-block" /> Cooking
                </dt>
                <dd
                  property="cookTime"
                  className="flex-grow basis-6/12 overflow-hidden bg-gray-50 p-2 italic"
                >
                  {recipe.cooking_time}
                </dd>
              </>
            )}
            {recipe.serves && (
              <>
                <dt className="basis-6/12 border-r bg-gray-100 p-2 font-semibold text-gray-700">
                  <FaUserFriends className="mr-1 inline-block" />
                  Serves
                </dt>
                <dd
                  className="flex-grow basis-6/12 overflow-hidden bg-gray-50 p-2 italic"
                  property="recipeYield"
                >
                  {recipe.serves}
                </dd>
              </>
            )}
          </dl>
        )}

        <IngredientsBlock content={recipe.ingredients} />
        <MethodBlock content={recipe.method} />
        {recipe.footnote && toPlainText(recipe.footnote).length > 0 && (
          <Callout>
            <RichText value={recipe.footnote} />
          </Callout>
        )}
      </article>
    </>
  );
}

// This function gets called at build time.
export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await allSlugs("recipe");
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: "blocking" };
};

// This function gets called at build time.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const recipe = await getRecipe(params?.slug?.toString() || "");
  return { props: { recipe }, notFound: !recipe, revalidate: 10 };
};
