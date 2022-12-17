import { FormEvent, useEffect, useState } from "react";
import { Metadata, RecipeList, Typography } from "@/components";
import { FaSpinner } from "react-icons/fa";
import { search } from "@/services/sanity/contentServices";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const searchInput = useRef<HTMLInputElement>(null);
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState<string>("");

  const { isLoading, isError, data } = useQuery({
    queryKey: ["search", submittedSearchTerm.toLowerCase()],
    queryFn: () => search(submittedSearchTerm),
    enabled: Boolean(submittedSearchTerm),
    staleTime: Infinity,
  });

  useEffect(() => {
    const q = router?.query?.q?.toString() || "";
    setSubmittedSearchTerm(q);
    if (searchInput.current) searchInput.current.value = q;
  }, [router?.query]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const q = searchInput.current?.value || "";
    setSubmittedSearchTerm(q);
    router.query.q = q;
    router.push({
      pathname: router.pathname,
      query: { q },
    });
  }

  if (isLoading && submittedSearchTerm)
    return <FaSpinner className="animate-spin text-3xl" />;

  if (isError) return <p>Error retrieving search results</p>;

  return (
    <>
      <Metadata title="Search" />
      <Typography el="h1">Search</Typography>
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
          ref={searchInput}
          defaultValue={router?.query?.q}
        />
        <button
          type="submit"
          className="h-12 w-4/12 bg-primary px-4 text-white hover:brightness-110 md:w-20"
        >
          Search
        </button>
      </form>

      {!!data?.length && (
        <>
          <Typography el="p" className="mt-4">
            {data.length} result{data.length > 1 ? "s" : ""} for{" "}
            <span className="font-bold">{router.query.q}</span>.
          </Typography>
          <RecipeList recipes={data} />
        </>
      )}

      {!data?.length && !!submittedSearchTerm.length && (
        <Typography el="p">
          No results for the search term &quot;
          {router.query.q}&quot;.
        </Typography>
      )}
    </>
  );
};

export default Search;
