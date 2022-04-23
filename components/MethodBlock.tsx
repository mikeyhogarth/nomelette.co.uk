interface Props {
  content: string;
}

function formatMethod(rawMethod: string): string[] {
  return rawMethod.split("\n");
}

export default function MethodBlock({ content }: Props) {
  const methodList = formatMethod(content);

  return (
    <div>
      <h2>Method</h2>
      <ol>
        {methodList.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ol>
    </div>
  );
}
