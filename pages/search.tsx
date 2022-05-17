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

      <form onSubmit={handleSubmit}>
        <label className="block" htmlFor="searchterm">
          Enter search term...
        </label>
        <input
          id="searchterm"
          name="searchterm"
          onChange={(event) => setSearchTerm(event.target.value)}
          className="p-2 w-60 md:w-72 border border-primary  h-12"
          type="search"
          autoComplete="off"
          required={true}
          minLength={3}
        />
        <input
          type="Submit"
          value="Search"
          className="bg-primary text-white px-4 cursor-pointer h-12"
        />
      </form>

      {searchCount > 0 && <hr className="my-10" />}
      {loading && <FaSpinner className="text-3xl spin" />}
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
