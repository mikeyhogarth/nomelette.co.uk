export interface Slug {
  current: string;
}

type BlockContent = {
  _key: string;
  _type: string;
};

export interface Recipe {
  name: string;
  slug: Slug;
  serves: string;
  cooking_time: string;
  preparation_time: string;
  tags: string[];
  description: BlockContent[];
  ingredients: string;
  method: string;
  footnote: BlockContent[];
  vegetarian: boolean;
  book: any;
}

export interface Book {
  title: string;
  slug: Slug;
  description: BlockContent[];
  recipes: Recipe[];
}
