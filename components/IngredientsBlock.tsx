import { Fragment } from "react";

interface Props {
  content: string;
}

function formatIngredientBlocks(rawIngredients: /*lol*/ string): string[][] {
  return rawIngredients
    .replace(/\*/g, "") // maybe revisit this '*' functionality later.
    .replace(/1\/2/g, "½")
    .replace(/1\/3/g, "⅓")
    .replace(/2\/3/g, "⅔")
    .replace(/1\/4/g, "¼")
    .replace(/3\/4/g, "¾")
    .split("--")
    .filter((n) => n.length)
    .map((block) => block.split("\n"));
}

export default function IngredientsBlock({ content }: Props) {
  // Some recipes have multiple ingredient "blocks" (e.g. "for the pastry, for the filling...")
  const ingredientBlocks = formatIngredientBlocks(content);
  const multiBlock = ingredientBlocks.length > 1;

  return (
    <div>
      <h2>Ingredients</h2>
      {ingredientBlocks.map((block, blockIndex) => (
        <Fragment key={`intredientBlock__${blockIndex}`}>
          {multiBlock && <h3>{block[0]}</h3>}
          <ul>
            {block.slice(multiBlock ? 1 : 0).map((line, lineIndex) => (
              <li key={`intredientLine__${lineIndex}`}>{line}</li>
            ))}
          </ul>
        </Fragment>
      ))}
    </div>
  );
}
