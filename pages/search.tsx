import { FormEvent, useEffect, useState } from "react";
import { Metadata, RecipeList, Typography } from "@/components";
import { FaSpinner } from "react-icons/fa";
import { Recipe } from "@/types";
import { search } from "@/services/sanity/contentServices";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function performSearch(searchTerm: string) {
    setResults(await search(searchTerm));
  }

  useEffect(() => {
    const q = router?.query?.q?.toString();
    if (q) {
      performSearch(q);
      setSearchTerm(q);
    }
  }, [router?.query]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    router.query.q = searchTerm;
    router.push({
      pathname: router.pathname,
      query: { q: searchTerm },
    });
    setLoading(true);
    performSearch(searchTerm);
    setLoading(false);
  }

  return (
    <>
      <Metadata title="Search" />

      <Typography el="h2">Search</Typography>
      <Typography el="p">Enter search terms into the field below.</Typography>
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
          value={searchTerm}
        />
        <button
          type="submit"
          className="h-12 w-4/12 bg-primary px-4 text-white hover:brightness-110 md:w-20"
        >
          Search
        </button>
      </form>

      {results.length > 0 && (
        <Typography el="p">
          Showing {results.length} result{results.length > 1 ? "s" : ""} for the
          search term <span className="font-bold">{router.query.q}</span>.
        </Typography>
      )}

      {loading && <FaSpinner className="animate-spin text-3xl" />}
      {results.length === 0 && !loading && (
        <Typography el="p">
          No results for the search term &quot;
          {router.query.q}&quot;.
        </Typography>
      )}

      <RecipeList recipes={results} />
    </>
  );
};

export default Search;
