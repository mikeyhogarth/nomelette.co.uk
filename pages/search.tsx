import { useState, FormEvent } from "react";
import { FaSpinner } from "react-icons/fa";
import Link from "next/link";
import { search } from "../services/sanity/contentServices";
import { Recipe } from "../types";

// artificial limit to prevent spamming
const MAX_SEARCH_LIMIT = 50;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [lastSearchTerm, setLastSearchTerm] = useState<string>("");
  const [results, setResults] = useState<Recipe[]>([]);
  const [searchCount, setSearchCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (searchCount > MAX_SEARCH_LIMIT) return [];

    setSearchCount(searchCount + 1);
    setLastSearchTerm(searchTerm);
    setLoading(true);
    setResults(await search(searchTerm));
    setLoading(false);
  }

  return (
    <>
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
        <p>
          Showing {results.length} results for the search term &quot;
          {lastSearchTerm}&quot;.
        </p>
      )}
      <ul>
        {results.map((r, idx) => (
          <li key={idx}>
            <Link href={`/recipes/${r.slug.current}`}>
              <a>{r.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Search;
