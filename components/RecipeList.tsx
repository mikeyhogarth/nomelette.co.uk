import Link from "next/link";
import TagList from "./TagList";
import { Recipe } from "../types";
import Image from "next/image";
import { urlForImage } from "../services/sanity/imageServices";

interface Props {
  recipes: Recipe[];
}

const RecipeList = ({ recipes }: Props) => {
  return (
    <ul className="list-none ">
      {recipes.map((r) => (
        <li key={r.name} className="mx-0 py-4 border-b leading-none">
          {r.image && (
            <div className="float-right leading-none m-4 mr-0 mt-0">
              <Link href={`/recipes/${r.slug.current}`}>
                <a className="text-2xl text-secondary font-bold no-underline">
                  <Image
                    src={urlForImage(r.image).width(500).height(500).url()}
                    alt={`Picture of ${r.name}`}
                    property="image"
                    width={150}
                    height={150}
                    loading="lazy"
                  />
                </a>
              </Link>
            </div>
          )}
          <Link href={`/recipes/${r.slug.current}`}>
            <a className="text-2xl text-secondary font-bold no-underline">
              {r.name}
            </a>
          </Link>
          {(r.cooking_time || r.preparation_time) && (
            <p className="italic text-gray-400 leading-normal py-2">
              {r.cooking_time && <span>{r.cooking_time} cooking</span>}
              {r.cooking_time && r.preparation_time && <span> plus </span>}
              {r.preparation_time && (
                <span>{r.preparation_time.toLowerCase()} prep.</span>
              )}
            </p>
          )}
          <TagList tags={r.tags} />
          <br className="clear-both h-0" />
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
