import Image from "next/image";
import Link from "@/components/Link";
import React from "react";
import { StaticImageData } from "next/image";

interface Props {
  text: string;
  image: StaticImageData;
  url: string;
  priority?: boolean;
}

export default function TagImage({ text, image, url, priority }: Props) {
  return (
    <Link href={url} className="no-underline hover:no-underline">
      <figure className="w-full leading-none transition hover:brightness-110">
        <Image
          src={image}
          style={{ height: "300px" }}
          alt={`Photo representing ${text}`}
          width={300}
          height={300}
          loading={priority ? "eager" : "lazy"}
          priority={priority}
        />
        <figcaption className="relative -top-9  bg-black py-1 px-3 text-lg font-bold text-white opacity-80">
          {text}
        </figcaption>
      </figure>
    </Link>
  );
}
