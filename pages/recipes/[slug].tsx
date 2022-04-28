import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { Recipe } from "../../types";
import { FaClock, FaUserClock, FaUserFriends, FaLeaf } from "react-icons/fa";
import Head from "next/head";
import { allSlugs, getRecipe } from "../../services/sanity/contentServices";
import IngredientsBlock from "../../components/IngredientsBlock";
import MethodBlock from "../../components/MethodBlock";
import Callout from "../../components/Callout";
import { PortableText, toPlainText } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "../../services/sanity/imageServices";

interface Props {
  recipe: Recipe;
}

export default function RecipePage({ recipe }: Props) {
  return (
    <article className="recipe">
      <Head>
        <title>{recipe.name} | Nomelette</title>
      </Head>
      <h1>
        {recipe.name}{" "}
        {recipe.vegetarian && <span className="text-green-600">(v)</span>}
      </h1>
      {recipe.image && (
        <div className="main-recipe-image">
          <Image
            src={urlForImage(recipe.image).width(500).height(500).url()}
            alt={`Picture of ${recipe.name}`}
            width={500}
            height={500}
          />
          <caption className="w-full block italic">{recipe.name}</caption>
        </div>
      )}

      <ul className="tag-list">
        {recipe.tags.map((tag) => (
          <li key={tag}>
            <Link href={`/tagged-with/${tag}`}>
              <a>{tag}</a>
            </Link>
          </li>
        ))}
      </ul>
      {toPlainText(recipe.description).length > 0 && (
        <PortableText value={recipe.description} />
      )}
      <dl className="mt-6">
        {recipe.preparation_time && (
          <>
            <dt>
              <FaUserClock className="inline-block mr-1 " />
              Preparation
            </dt>
            <dd>{recipe.preparation_time}</dd>
          </>
        )}
        {recipe.cooking_time && (
          <>
            <dt>
              <FaClock className="inline-block mr-1 " /> Cooking
            </dt>
            <dd>{recipe.cooking_time}</dd>
          </>
        )}
        {recipe.serves && (
          <>
            <dt>
              <FaUserFriends className="inline-block mr-1 " />
              Serves
            </dt>
            <dd>{recipe.serves}</dd>
          </>
        )}
      </dl>

      <IngredientsBlock content={recipe.ingredients} />
      <MethodBlock content={recipe.method} />
      {toPlainText(recipe.footnote).length > 0 && (
        <Callout>
          <PortableText value={recipe.footnote} />
        </Callout>
      )}
    </article>
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