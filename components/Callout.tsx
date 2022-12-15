import React, { ReactNode } from "react";

interface Props {
  quote?: boolean;
  children: ReactNode;
}

export default function Callout({ quote = false, children, ...props }: Props) {
  return React.createElement(
    quote ? "blockquote" : "div",
    {
      className: "my-5 border-l-8 border-l-gray-200 bg-gray-100 p-5 italic",
      ...props,
    },
    children
  );
}
