import { GetStaticProps, GetStaticPaths } from "next";
import { Recipe } from "../../types";
import Metadata from "../../components/Metadata";
import { FaClock, FaUserClock, FaUserFriends } from "react-icons/fa";
import Head from "next/head";
import { allSlugs, getRecipe } from "../../services/sanity/contentServices";
import IngredientsBlock from "../../components/IngredientsBlock";
import MethodBlock from "../../components/MethodBlock";
import Callout from "../../components/Callout";
import TagList from "../../components/TagList";
import { PortableText, toPlainText } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "../../services/sanity/imageServices";

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
        <h1 property="name">{recipe.name}</h1>
        {recipe.image && (
          <figure className="main-recipe-image">
            <Image
              src={urlForImage(recipe.image).width(500).height(500).url()}
              alt={`Picture of ${recipe.name}`}
              property="image"
              width={500}
              height={500}
            />
            <figcaption className="w-full text-center block italic">
              {recipe.name}
            </figcaption>
          </figure>
        )}

        <TagList tags={recipe.tags} />

        <div property="description">
          {recipe.description && toPlainText(recipe.description).length > 0 && (
            <PortableText value={recipe.description} />
          )}
        </div>
        {(recipe.preparation_time || recipe.cooking_time || recipe.serves) && (
          <dl className="mt-6">
            {recipe.preparation_time && (
              <>
                <dt>
                  <FaUserClock className="inline-block mr-1" />
                  Preparation
                </dt>
                <dd property="prepTime">{recipe.preparation_time}</dd>
              </>
            )}
            {recipe.cooking_time && (
              <>
                <dt>
                  <FaClock className="inline-block mr-1" /> Cooking
                </dt>
                <dd property="cookTime">{recipe.cooking_time}</dd>
              </>
            )}
            {recipe.serves && (
              <>
                <dt>
                  <FaUserFriends className="inline-block mr-1" />
                  Serves
                </dt>
                <dd property="recipeYield">{recipe.serves}</dd>
              </>
            )}
          </dl>
        )}

        <IngredientsBlock content={recipe.ingredients} />
        <MethodBlock content={recipe.method} />
        {recipe.footnote && toPlainText(recipe.footnote).length > 0 && (
          <Callout>
            <PortableText value={recipe.footnote} />
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
