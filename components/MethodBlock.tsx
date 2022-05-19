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
      <ol className="method-list">
        {methodList.map((line, idx) => (
          <li className="flex" key={idx} property="recipeInstructions">
            {line}
          </li>
        ))}
      </ol>
      <hr className="mt-20 mb-12" />
    </>
  );
}
