import { Book } from "@/types";
import { GetStaticProps } from "next";
import Link from "@/components/Link";
import Metadata from "@/components/Metadata";
import React from "react";
import RichText from "@/components/RichText";
import Typography from "@/components/Typography";
import { allBooks } from "@/services/sanity/contentServices";

interface Props {
  books: Book[];
}

export default function RecipePage({ books }: Props) {
  return (
    <div>
      <Metadata title="Books" />

      <Typography el="h1">Books</Typography>

      <Typography el="p">
        Most of the recipes within Sheila&apos;s archive come in the form of A4
        handwritten sheets, however there are several &quot;compilations&quot;
        that Sheila put together either for charity events or to share with
        friends and family around the festive period. This page details some of
        the features of these compilations and provides links to see the recipes
        they contained.
      </Typography>
      {books.map((book) => (
        <React.Fragment key={book.title}>
          <Typography el="h2">{book.title}</Typography>
          <RichText value={book.description} />
          <Link href={`/books/${book.slug.current}`}>
            Browse recipes from {book.title}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}

// This function gets called at build time.
export const getStaticProps: GetStaticProps = async () => {
  const books = await allBooks();
  return { props: { books }, revalidate: 10 };
};
