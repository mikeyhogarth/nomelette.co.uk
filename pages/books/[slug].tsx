import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { Book } from "../../types";
import Head from "next/head";
import { getBook, allSlugs } from "../../services/sanity/contentServices";

interface Props {
  book: Book;
}

export default function RecipePage({ book }: Props) {
  return (
    <div>
      <Head>
        <title>Recipes from the book {book.title} | Nomelette</title>
      </Head>
      <h1>Recipes from the book &quot;{book.title}&quot;</h1>
      <ul>
        {book.recipes.map((r) => (
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
  const tags = await allSlugs("book");
  const paths = (tags || []).map((slug) => ({
    params: { slug },
  }));
  return { paths, fallback: "blocking" };
};

// This function gets called at build time.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const book = await getBook(params?.slug?.toString() || "");
  return { props: { book }, notFound: !book, revalidate: 10 };
};
