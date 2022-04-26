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
      <ol>
        {methodList.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ol>
    </>
  );
}
