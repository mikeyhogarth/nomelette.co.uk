import React, { type HTMLAttributes } from "react";
import { clsx } from "clsx";

type TypographyElement = HTMLHeadingElement | HTMLParagraphElement;

interface Props extends React.HTMLAttributes<TypographyElement> {
  el: "h1" | "h2" | "h3" | "p";
}

const headingCommonClasses =
  "my-6 break-words font-bold uppercase tracking-widest";

const typograpyClasses = {
  h1: clsx(
    headingCommonClasses,
    "py-4 text-4xl border-b border-gray-200 text-4xl print:border-none print:text-3xl print:my-4"
  ),
  h2: clsx(
    headingCommonClasses,
    "text-3xl text-secondary print:my-4 print:text-base"
  ),
  h3: clsx(
    headingCommonClasses,
    "text-xl text-black mb-1 print:my-4 print:text-base"
  ),
  p: "my-2 text-base leading-normal",
};

const Typography = ({ el, children, className }: Props) => {
  const Element = ({ ...props }: HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(el, props, children);

  return (
    <Element className={className || typograpyClasses[el]}>{children}</Element>
  );
};

export default Typography;
