import { Metadata, TagImage, TagList, Typography } from "@/components";
import { GetStaticProps } from "next";
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
      <Typography el="h1">Browse</Typography>
      <Typography el="h2" align="center">
        Browse by season
      </Typography>
      <ul className="flex list-none flex-wrap justify-center gap-x-5 gap-y-0 md:flex-nowrap">
        <li className="ml-0">
          <TagImage
            image={imgSpring}
            text="Spring"
            url="/tagged-with/spring"
            priority={true}
          />
        </li>
        <li className="ml-0">
          <TagImage
            image={imgSummer}
            text="Summer"
            url="/tagged-with/summer"
            priority={true}
          />
        </li>
        <li className="ml-0">
          <TagImage
            image={imgAutumn}
            text="Autumn"
            url="/tagged-with/autumn"
            priority={true}
          />
        </li>
        <li className="ml-0">
          <TagImage
            image={imgWinter}
            text="Winter"
            url="/tagged-with/winter"
            priority={true}
          />
        </li>
      </ul>

      <Typography el="h2" align="center">
        Browse by Course
      </Typography>
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

      <Typography el="h2" align="center">
        Browse by tag
      </Typography>
      <TagList
        tags={tags.filter((t) => t?.length && !SPECIAL_TAGS.includes(t))}
      />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const tags = await getAllTags();
  return { props: { tags }, revalidate: 10 };
};
