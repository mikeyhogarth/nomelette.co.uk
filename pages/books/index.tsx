import { GetStaticProps } from "next";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { Book } from "../../types";
import Head from "next/head";
import { allBooks } from "../../services/sanity/contentServices";

interface Props {
  books: Book[];
}

export default function RecipePage({ books }: Props) {
  return (
    <div>
      <Head>
        <title>Books | Nomelette</title>
      </Head>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.title}>
            <h2>{book.title}</h2>
            <PortableText value={book.description} />
            <Link href={`/books/${book.slug.current}`}>
              <a>Explore the book {book.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// This function gets called at build time.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const books = await allBooks();
  return { props: { books } };
};
