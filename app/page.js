import SearchForm from "./components/search-form";
import ArtworkGrid from "./components/artwork-grid";
import Pagination from "./components/pagination";
import ErrorMessage from "./components/error-message";
import { searchArtworks } from "./lib/get-artworks";

export default async function HomePage({ searchParams }) {
  const { q, page } = await searchParams;
  const query = typeof q === "string" ? q.trim() : "";
  const pageNumber = Math.max(1, Number.parseInt(page, 10) || 1);

  const result = await searchArtworks({ query, page: pageNumber });
  const heading = query ? `Results for "${query}"` : "Featured paintings";

  return (
      <main>
        <h1>Art Explorer</h1>
        <p>Search the Harvard Art Museums collection.</p>
        <SearchForm defaultQuery={query} />

        {result.error && <ErrorMessage message={result.error} />}

        {result.data && (
            <section aria-labelledby="results-heading">
              <h2 id="results-heading">{heading}</h2>
              {result.data.artworks.length === 0 ? (
                  <p>No artworks with images matched your search.</p>
              ) : (
                  <ArtworkGrid artworks={result.data.artworks} />
              )}
              <Pagination
                  query={query}
                  page={result.data.page}
                  totalPages={result.data.totalPages}
              />
            </section>
        )}
      </main>
  );
}