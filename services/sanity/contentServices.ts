import client from "./client";
import { Recipe, Book } from "../../types";

// return every recipe (hard limit of 50 for now)...
const recipesQuery = `*[_type == "recipe"] { name, slug }[0...50]`;
export async function allRecipes(): Promise<Recipe[]> {
  return client.fetch(recipesQuery);
}

// return single recipe
const singleRecipeQuery = `*[_type == "recipe" && slug.current == $slug][0]`;
export async function getRecipe(slug: string): Promise<Recipe> {
  return client.fetch(singleRecipeQuery, {
    slug,
  });
}

// return every slug
const allSlugsQuery = `*[_type == $schemaName] { slug }`;
export async function allSlugs(schemaName: string): Promise<string[]> {
  const recipes: Recipe[] = await client.fetch(allSlugsQuery, { schemaName });
  return recipes.map((r) => r.slug.current);
}

// return every book
const booksQuery = `*[_type == "book"] { title, description, slug }`;
export function allBooks(): Promise<Book[]> {
  return client.fetch(booksQuery);
}

// return single book and its associated recipes
const singleBookQuery = `                                                
*[_type=="book" && slug.current==$slug][0]{
  title,
  description,
  slug,
  "recipes": *[_type=='recipe' && references(^._id)]{ name , slug }
}`;
export async function getBook(slug: string): Promise<Book> {
  return client.fetch(singleBookQuery, {
    slug,
  });
}

// return all tags
const tagsQuery = `*[_type == "recipe"].tags`;
export async function getAllTags(): Promise<string[]> {
  const result = await client.fetch(tagsQuery);

  // flatten and de-dupe (TODO: look into whether you can do this in GROQ directly)
  const flattenedResult: string[] = Array.from(new Set(result.flat()));
  return Promise.resolve(flattenedResult.filter((t) => t && t.length));
}

// return recipes tagged with a specific tag
const taggedRecipesQuery = `*[_type == "recipe" && $tag in tags][]`;
export async function getRecipesTaggedWith(tag: string): Promise<Recipe[]> {
  return client.fetch(taggedRecipesQuery, {
    tag,
  });
}

// Search (TODO: Come back and make this smarter at some point)
const searchQuery =
  "*[_type == 'recipe' && [name, ingredients] match $searchTerms]";
export async function search(text: string): Promise<Recipe[]> {
  const searchTerms = text.split(" ").map((t) => `*${t.trim()}*`);

  return client.fetch(searchQuery, {
    searchTerms,
  });
}
