import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface Slug {
  current: string;
}

export type BlockContent = {
  _key: string;
  _type: string;
};

export interface Recipe {
  name: string;
  slug: Slug;
  serves: string;
  cooking_time: string;
  image: SanityImageSource;
  preparation_time: string;
  tags: string[];
  description: BlockContent[];
  ingredients: string;
  method: string;
  footnote: BlockContent[];
  book: Book;
}

export interface Book {
  title: string;
  slug: Slug;
  description: BlockContent[];
  recipes: Recipe[];
}
