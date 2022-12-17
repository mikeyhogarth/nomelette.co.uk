import { FormEvent, useEffect, useState } from "react";
import { Metadata, RecipeList, Typography } from "@/components";
import { FaSpinner } from "react-icons/fa";
import { search } from "@/services/sanity/contentServices";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState<string>("");

  const { isLoading, isError, data } = useQuery({
    queryKey: ["search", submittedSearchTerm],
    queryFn: () => search(submittedSearchTerm),
    enabled: Boolean(submittedSearchTerm),
    staleTime: Infinity,
  });

  useEffect(() => {
    const q = router?.query?.q?.toString() || "";
    setSearchTerm(q);
    setSubmittedSearchTerm(q);
  }, [router?.query]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmittedSearchTerm(searchTerm);
    router.query.q = searchTerm;
    router.push({
      pathname: router.pathname,
      query: { q: searchTerm },
    });
  }

  if (isLoading) return <FaSpinner className="animate-spin text-3xl" />;
  if (isError || !data) return <p>Error</p>;

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
          className="h-12 w-8/12 border border-primary p-2  md:w-72"
          type="search"
          autoComplete="off"
          required={true}
          minLength={3}
          placeholder="Name or ingredients..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button
          type="submit"
          className="h-12 w-4/12 bg-primary px-4 text-white hover:brightness-110 md:w-20"
        >
          Search
        </button>
      </form>

      {data.length > 0 && (
        <Typography el="p">
          Showing {data.length} result{data.length > 1 ? "s" : ""} for the
          search term <span className="font-bold">{router.query.q}</span>.
        </Typography>
      )}

      {data.length === 0 && router?.query?.q && (
        <Typography el="p">
          No results for the search term &quot;
          {router.query.q}&quot;.
        </Typography>
      )}

      <RecipeList recipes={data} />
    </>
  );
};

export default Search;
