import Link from "../components/Link";
import { FaLeaf } from "react-icons/fa";

interface Props {
  tags: string[];
}

export default function TagList({ tags }: Props) {
  return (
    <ul className="tag-list">
      {(tags || [])
        .sort((a, b) => a.localeCompare(b))
        .map((tag, idx) => (
          <li key={idx} property="recipeCategory">
            <Link
              href={`/tagged-with/${tag}`}
              className={`${
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
