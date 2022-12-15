import type { BlockContent } from "@/types";
import Callout from "./Callout";
import { PortableText } from "@portabletext/react";
import { ReactNode } from "react";
import Typography from "@/components/Typography";

interface Props {
  value: BlockContent[];
}

const block = {
  blockquote: ({ children }: { children?: ReactNode }) => (
    <Callout quote={true}>{children}</Callout>
  ),
  normal: ({ children }: { children?: ReactNode }) => (
    <Typography el="p">{children}</Typography>
  ),
};

const RichText = ({ value }: Props) => {
  return <PortableText value={value} components={{ block }} />;
};

export default RichText;
