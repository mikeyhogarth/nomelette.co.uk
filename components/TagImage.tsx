import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "../components/Link";

interface Props {
  text: string;
  image: StaticImageData;
  url: string;
}

export default function TagImage({ text, image, url }: Props) {
  return (
    <Link href={url} className="no-underline hover:no-underline">
      <figure className="w-full leading-none transition hover:brightness-110">
        <Image
          src={image}
          style={{ height: "300px" }}
          alt={`Photo representing ${text}`}
          width={300}
          height={300}
        />
        <figcaption className="relative -top-9  bg-black py-1 px-3 text-lg font-bold text-white opacity-80">
          {text}
        </figcaption>
      </figure>
    </Link>
  );
}
