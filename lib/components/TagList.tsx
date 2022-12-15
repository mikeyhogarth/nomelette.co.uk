import { FaLeaf } from "react-icons/fa";
import Link from "@/components/Link";

interface Props {
  tags: string[];
}

export default function TagList({ tags }: Props) {
  return (
    <ul className="my-6 flex list-none flex-row flex-wrap gap-1 print:hidden">
      {(tags || [])
        .sort((a, b) => a.localeCompare(b))
        .map((tag, idx) => (
          <li key={idx} property="recipeCategory" className="m-0">
            <Link
              href={`/tagged-with/${tag}`}
              className={`rounded-md py-1 px-2 text-base text-white no-underline brightness-100 ${
                tag === "vegetarian" ? "bg-green-500" : "bg-primary"
              }`}
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
