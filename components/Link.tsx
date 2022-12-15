import { default as NextLink } from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;

  // Rest props
  [x: string]: any;
}

const Link = ({ title, href, children, ...props }: Props) => {
  return (
    <NextLink
      href={href}
      className="text-primary underline visited:text-secondary hover:underline hover:brightness-110 hover:transition-all"
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;
