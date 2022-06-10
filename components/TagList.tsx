import Link from "next/link";
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
            <Link href={`/tagged-with/${tag}`}>
              <a
                className={`${
                  tag === "vegetarian" ? "bg-green-500" : "bg-primary"
                }`}
              >
                {tag === "vegetarian" && (
                  <FaLeaf className="inline mr-1 relative -top-px" />
                )}
                {tag}
              </a>
            </Link>
          </li>
        ))}
    </ul>
  );
}
