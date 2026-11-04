import type { Metadata } from "next";
import SearchForm from "./components/SearchForm";
import ArtworkGrid from "./components/ArtworkGrid";
import Pagination from "./components/Pagination";
import ErrorMessage from "./components/ErrorMessage";
import { searchArtworks } from "./lib/get-artworks";

export const metadata: Metadata = {
    title: "Home",
};

type HomePageProps = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
    const { q, page } = await searchParams;
    const query = typeof q === "string" ? q.trim() : "";
    const pageText = typeof page === "string" ? page : "";
    const pageNumber = Math.max(1, Number.parseInt(pageText, 10) || 1);

    const result = await searchArtworks({ query, page: pageNumber });
    const heading = query ? `Results for "${query}"` : "Featured paintings";

    return (
        <main>
            <h1>Art Explorer</h1>
            <p>Search the Harvard Art Museums collection.</p>
            <SearchForm defaultQuery={query} />

            {!result.ok && <ErrorMessage message={result.error} />}

            {result.ok && (
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