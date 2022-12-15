import { GetStaticProps } from "next";
import Metadata from "@/components/Metadata";
import TagImage from "@/components/TagImage";
import TagList from "@/components/TagList";
import { getAllTags } from "@/services/sanity/contentServices";

/* Images */
import imgAutumn from "../../public/media/images/autumn.jpg";
import imgDesserts from "../../public/media/images/desserts.jpg";
import imgMains from "../../public/media/images/mains.jpg";
import imgSpring from "../../public/media/images/spring.jpg";
import imgStarters from "../../public/media/images/starters.jpg";
import imgSummer from "../../public/media/images/summer.jpg";
import imgWinter from "../../public/media/images/winter.jpg";
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
      <ul className="flex list-none flex-wrap justify-center gap-x-5 gap-y-0 md:flex-nowrap">
        <li className="ml-0">
          <TagImage image={imgSpring} text="Spring" url="/tagged-with/spring" />
        </li>
        <li className="ml-0">
          <TagImage image={imgSummer} text="Summer" url="/tagged-with/summer" />
        </li>
        <li className="ml-0">
          <TagImage image={imgAutumn} text="Autumn" url="/tagged-with/autumn" />
        </li>
        <li className="ml-0">
          <TagImage image={imgWinter} text="Winter" url="/tagged-with/winter" />
        </li>
      </ul>

      <h1>Browse by Course</h1>
      <ul className="flex list-none flex-wrap justify-center gap-x-5 gap-y-0 md:flex-nowrap">
        <li className="ml-0">
          <TagImage
            image={imgStarters}
            text="Starters"
            url="/tagged-with/starters"
          />
        </li>
        <li className="ml-0">
          <TagImage
            image={imgMains}
            text="Mains"
            url="/tagged-with/main-courses"
          />
        </li>
        <li className="ml-0">
          <TagImage
            image={imgDesserts}
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
export const getStaticProps: GetStaticProps = async () => {
  const tags = await getAllTags();
  return { props: { tags }, revalidate: 10 };
};
