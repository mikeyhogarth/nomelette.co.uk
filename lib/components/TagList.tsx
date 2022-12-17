import { FaLeaf } from "react-icons/fa";
import Link from "@/components/Link";
import { clsx } from "clsx";

interface Props {
  tags: string[];
}

export default function TagList({ tags }: Props) {
  return (
    <ul className="my-6 flex list-none flex-row flex-wrap gap-1 print:hidden">
      {(tags || [])
        .sort((a, b) => a.localeCompare(b))
        .map((tag, idx) => (
          <li
            key={idx}
            property="recipeCategory"
            className="m-0 hover:brightness-110"
          >
            <Link
              href={`/tagged-with/${tag}`}
              className={clsx(
                "rounded-md py-1 px-2 text-base text-white no-underline brightness-110",
                tag == "vegetarian" && "bg-green-500",
                tag != "vegetarian" && "bg-primary"
              )}
            >
              {tag === "vegetarian" && (
                <FaLeaf className="relative -top-px mr-1 inline" />
              )}
              {tag}
            </Link>
          </li>
        ))}
    </ul>
  );
}
