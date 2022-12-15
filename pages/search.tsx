import { useState, useEffect, FormEvent } from "react";
import { FaSpinner } from "react-icons/fa";
import Metadata from "@/components/Metadata";
import RecipeList from "@/components/RecipeList";
import { search } from "@/services/sanity/contentServices";
import { Recipe } from "@/types";

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
    setSearchCount(cachedSearchResults.length);
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
      <Metadata title="Search" />

      <h2>Search</h2>
      <p>Enter search terms into the field below.</p>
      <form onSubmit={handleSubmit}>
        <input
          id="searchterm"
          name="searchterm"
          aria-label="Search"
          onChange={(event) => setSearchTerm(event.target.value)}
          className="h-12 w-8/12 border border-primary p-2  md:w-72"
          type="search"
          autoComplete="off"
          required={true}
          minLength={3}
          placeholder="Name or ingredients..."
        />
        <button
          type="submit"
          className="h-12 w-4/12 bg-primary px-4 text-white hover:brightness-110 md:w-20"
        >
          Search
        </button>
      </form>

      {results.length > 0 && (
        <p className="pt-4">
          Showing {results.length} result{results.length > 1 ? "s" : ""} for the
          search term <span className="font-bold">{lastSearchTerm}</span>.
        </p>
      )}

      {loading && <FaSpinner className="animate-spin text-3xl" />}
      {results.length === 0 && !loading && searchCount > 0 && (
        <p className="pt-4">
          No results for the search term &quot;
          {lastSearchTerm}&quot;.
        </p>
      )}

      <RecipeList recipes={results} />
    </>
  );
};

export default Search;
