import { GetStaticProps } from "next";
import TagList from "../../components/TagList";
import Head from "next/head";
import { getAllTags } from "../../services/sanity/contentServices";
import TagImage from "../../components/TagImage";

/* Images */
import springImage from "../../public/media/images/spring.jpg";
import summerImage from "../../public/media/images/summer.jpg";
import autumnImage from "../../public/media/images/autumn.jpg";
import winterImage from "../../public/media/images/winter.jpg";
import startersImage from "../../public/media/images/starters.jpg";
import mainsImage from "../../public/media/images/mains.jpg";
import dessertsImage from "../../public/media/images/desserts.jpg";
import Metadata from "../../components/Metadata";
/* 
  Some tags are called out specifically and don't need to be in the main tag list.
*/

const SPECIAL_TAGS = [
  "spring",
  "summer",
  "autumn",
  "winter",
  "starters",
  "main-courses",
  "desserts",
];

interface Props {
  tags: string[];
}

export default function RecipePage({ tags }: Props) {
  return (
    <div>
      <Metadata title="Browse" />
      <h1>Browse by Season</h1>
      <ul className="picture-tags">
        <li>
          <TagImage
            image={springImage}
            text="Spring"
            url="/tagged-with/spring"
          />
        </li>
        <li>
          <TagImage
            image={summerImage}
            text="Summer"
            url="/tagged-with/summer"
          />
        </li>
        <li>
          <TagImage
            image={autumnImage}
            text="Autumn"
            url="/tagged-with/autumn"
          />
        </li>
        <li>
          <TagImage
            image={winterImage}
            text="Winter"
            url="/tagged-with/winter"
          />
        </li>
      </ul>

      <h1>Browse by Course</h1>
      <ul className="picture-tags">
        <li>
          <TagImage
            image={startersImage}
            text="Starters"
            url="/tagged-with/starters"
          />
        </li>
        <li>
          <TagImage
            image={mainsImage}
            text="Mains"
            url="/tagged-with/main-courses"
          />
        </li>
        <li>
          <TagImage
            image={dessertsImage}
            text="Desserts"
            url="/tagged-with/desserts"
          />
        </li>
      </ul>

      <h1>Browse by tag</h1>
      <TagList
        tags={tags.filter((t) => t?.length && !SPECIAL_TAGS.includes(t))}
      />
    </div>
  );
}

// This function gets called at build time.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tags = await getAllTags();
  return { props: { tags }, revalidate: 10 };
};
