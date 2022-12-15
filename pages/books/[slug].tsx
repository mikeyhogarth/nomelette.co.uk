import { GetStaticPaths, GetStaticProps } from "next";
import { allSlugs, getBook } from "@/services/sanity/contentServices";
import { Book } from "@/types";
import Link from "@/components/Link";
import Metadata from "@/components/Metadata";

interface Props {
  book: Book;
}

export default function RecipePage({ book }: Props) {
  return (
    <div>
      <Metadata title={`Recipes from the book ${book.title}`} />
      <h1>Recipes from the book &quot;{book.title}&quot;</h1>
      <ul>
        {book.recipes.map((r) => (
          <li key={r.name}>
            <Link href={`/recipes/${r.slug.current}`}>{r.name}</Link>
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
