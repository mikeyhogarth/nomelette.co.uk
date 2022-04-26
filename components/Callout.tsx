import { ReactChild } from "react";

interface Props {
  children: ReactChild;
}

export default function Callout({ children }: Props) {
  return <div className="callout">{children}</div>;
}
