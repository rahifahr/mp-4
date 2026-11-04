import type { Metadata } from "next";
import Link from "next/link";
import ArtworkImage from "../../components/ArtworkImage";
import DetailList from "../../components/DetailList";
import ErrorMessage from "../../components/ErrorMessage";
import { getArtwork } from "../../lib/get-artworks";

export const metadata: Metadata = {
    title: "Artwork",
};

type ArtworkPageProps = {
    params: Promise<{ id: string }>;
};

export default async function ArtworkPage({ params }: ArtworkPageProps) {
    const { id } = await params;
    const result = await getArtwork(id);

    if (!result.ok) {
        return (
            <main>
                <h1>Artwork unavailable</h1>
                <ErrorMessage message={result.error} />
                <p>
                    <Link href="/">Back to search</Link>
                </p>
            </main>
        );
    }

    const artwork = result.data;

    return (
        <main>
            <h1>{artwork.title}</h1>
            <article className="artwork-detail">
                <figure>
                    <ArtworkImage src={artwork.image} title={artwork.title} />
                    <figcaption>{artwork.creditLine}</figcaption>
                </figure>
                <section aria-labelledby="details-heading">
                    <h2 id="details-heading">Details</h2>
                    <DetailList
                        items={[
                            { label: "Artist", value: artwork.artist },
                            { label: "Date", value: artwork.date },
                            { label: "Classification", value: artwork.classification },
                            { label: "Medium", value: artwork.medium },
                            { label: "Dimensions", value: artwork.dimensions },
                            { label: "Culture", value: artwork.culture },
                        ]}
                    />
                    {artwork.description && <p>{artwork.description}</p>}
                    {artwork.museumUrl && (
                        <p>
                            <a href={artwork.museumUrl}>View on harvardartmuseums.org</a>
                        </p>
                    )}
                </section>
            </article>
            <p>
                <Link href="/">Back to search</Link>
            </p>
        </main>
    );
}