import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import { getAllTags } from "../../services/sanity/contentServices";

interface Props {
  tags: string[];
}

export default function RecipePage({ tags }: Props) {
  return (
    <div>
      <Head>
        <title>Tags | Nomelette</title>
      </Head>
      <h1>Browse by tag</h1>
      <ul className="tag-list">
        {tags.map((tag) => (
          <li key={tag}>
            <Link href={`/tagged-with/${tag}`}>
              <a>{tag}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// This function gets called at build time.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tags = await getAllTags();
  return { props: { tags } };
};
