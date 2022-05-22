import { useState, useEffect, FormEvent } from "react";
import { FaSpinner } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import RecipeList from "../components/RecipeList";
import { search } from "../services/sanity/contentServices";
import { Recipe } from "../types";

// artificial limit to prevent spamming
const MAX_SEARCH_LIMIT = 50;
const SEARCH_TERM_LOCAL_STORAGE_KEY = "searchTerm";
const SEARCH_RESULTS_LOCAL_STORAGE_KEY = "searchResults";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [lastSearchTerm, setLastSearchTerm] = useState<string>("");
  const [results, setResults] = useState<Recipe[]>([]);
  const [searchCount, setSearchCount] = useState<number>(results.length);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const cachedSearchTerm =
      localStorage.getItem(SEARCH_TERM_LOCAL_STORAGE_KEY) || "";

    const cachedSearchResults = JSON.parse(
      localStorage.getItem(SEARCH_RESULTS_LOCAL_STORAGE_KEY) || "[]"
    );

    setSearchTerm(cachedSearchTerm);
    setLastSearchTerm(cachedSearchTerm);
    setResults(cachedSearchResults);
  }, []);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (searchCount > MAX_SEARCH_LIMIT) return [];

    setSearchCount(searchCount + 1);
    setLastSearchTerm(searchTerm);
    setLoading(true);
    const searchResults = await search(searchTerm);
    setResults(searchResults);
    setLoading(false);

    // Set results on local storage so that they remain when back pressed / user
    // comes back to search page.
    localStorage.setItem(SEARCH_TERM_LOCAL_STORAGE_KEY, searchTerm);
    localStorage.setItem(
      SEARCH_RESULTS_LOCAL_STORAGE_KEY,
      JSON.stringify(searchResults)
    );
  }

  return (
    <>
      <Head>
        <title>Search | Nomelette</title>
      </Head>

      <h2>Search</h2>
      <p>Enter search terms into the field below.</p>
      <form onSubmit={handleSubmit}>
        <input
          id="searchterm"
          name="searchterm"
          aria-label="Search"
          onChange={(event) => setSearchTerm(event.target.value)}
          className="p-2 w-8/12 md:w-72 border border-primary  h-12"
          type="search"
          autoComplete="off"
          required={true}
          minLength={3}
          placeholder="Name or ingredients..."
        />
        <button
          type="submit"
          className="bg-primary text-white px-4 h-12 w-4/12 md:w-20 hover:brightness-110"
        >
          Search
        </button>
      </form>

      {searchCount > 0 && <hr className="my-10" />}
      {loading && <FaSpinner className="text-3xl animate-spin" />}
      {results.length === 0 && !loading && searchCount > 0 && (
        <p>
          No results for the search term &quot;
          {lastSearchTerm}&quot;.
        </p>
      )}

      {results.length > 0 && (
        <p className="pt-4">
          Showing {results.length} results for the search term{" "}
          <span className="font-bold">{lastSearchTerm}</span>.
        </p>
      )}
      <RecipeList recipes={results} />
    </>
  );
};

export default Search;
