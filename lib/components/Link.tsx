import { type LinkProps, default as NextLink } from "next/link";
import { type HTMLAttributes } from "react";

const Link = ({
  href,
  children,
  ...props
}: LinkProps & HTMLAttributes<HTMLAnchorElement>) => {
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
