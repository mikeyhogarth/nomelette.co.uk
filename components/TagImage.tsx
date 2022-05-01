import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  text: string;
  image: StaticImageData;
  url: string;
}

export default function TagImage({ text, image, url }: Props) {
  return (
    <Link href={url}>
      <a className="no-underline hover:no-underline">
        <figure className="leading-none w-full hover:brightness-110 transition">
          <Image
            src={image}
            alt={`Photo representing ${text}`}
            width={300}
            height={300}
          />
          <figcaption className="text-lg font-bold  bg-black opacity-80 text-white relative -top-9 py-1 px-3">
            {text}
          </figcaption>
        </figure>
      </a>
    </Link>
  );
}
