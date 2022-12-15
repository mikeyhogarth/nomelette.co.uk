import { PortableText } from "@portabletext/react";
import Callout from "./Callout";
import type { BlockContent } from "@/types";
import { ReactNode } from "react";

interface Props {
  value: BlockContent[];
}

const block = {
  blockquote: ({ children }: { children?: ReactNode }) => (
    <Callout quote={true}>{children}</Callout>
  ),
};

const RichText = ({ value }: Props) => {
  return <PortableText value={value} components={{ block }} />;
};

export default RichText;
