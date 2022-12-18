import { Link, TagList, Typography } from "@/components";
import Image from "next/image";
import { Recipe } from "@/types";
import { urlForImage } from "@/services/sanity/imageServices";

interface Props {
  recipes: Recipe[];
}

const RecipeList = ({ recipes }: Props) => {
  return (
    <>
      <ul className="list-none ">
        {recipes.map((r) => (
          <li key={r.name} className="mx-0 border-b py-4 leading-none">
            {r.image && (
              <div className="float-right m-4 mr-0 mt-0 leading-none">
                <Link href={`/recipes/${r.slug.current}`}>
                  <Image
                    src={urlForImage(r.image).width(500).height(500).url()}
                    alt={`Picture of ${r.name}`}
                    property="image"
                    width={150}
                    height={150}
                    loading="lazy"
                  />
                </Link>
              </div>
            )}
            <Link
              href={`/recipes/${r.slug.current}`}
              className="text-2xl font-bold text-secondary no-underline hover:brightness-150"
            >
              {r.name}
            </Link>
            {(r.cooking_time || r.preparation_time) && (
              <Typography
                el="p"
                className="py-2 italic leading-normal text-gray-400"
              >
                {r.cooking_time && <span>{r.cooking_time} cooking</span>}
                {r.cooking_time && r.preparation_time && <span> plus </span>}
                {r.preparation_time && (
                  <span>{r.preparation_time.toLowerCase()} prep.</span>
                )}
              </Typography>
            )}
            <TagList tags={r.tags} />
            <br className="clear-both h-0" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RecipeList;
