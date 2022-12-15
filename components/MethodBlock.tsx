interface Props {
  content: string;
}

function formatMethod(rawMethod: string): string[] {
  return rawMethod.split("\n").filter((n) => n.length);
}

export default function MethodBlock({ content }: Props) {
  const methodList = formatMethod(content);

  return (
    <>
      <h2>Method</h2>
      <ol className="list-none [counter-reset:item]">
        {methodList.map((line, idx) => (
          <li
            className="m-4 ml-0 flex leading-8 [counter-increment:item] before:mr-4
            before:inline-block before:h-8 before:w-8 before:shrink-0 before:rounded-full before:bg-primary before:text-center before:text-white before:[content:counter(item)]"
            key={idx}
            property="recipeInstructions"
          >
            {line}
          </li>
        ))}
      </ol>
      <hr className="mt-20 mb-12" />
    </>
  );
}
