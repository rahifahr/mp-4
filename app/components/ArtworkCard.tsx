import Link from "next/link";
import ArtworkImage from "./ArtworkImage";
import type { Artwork } from "../lib/types";

type ArtworkCardProps = {
    artwork: Artwork;
};

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
    return (
        <li>
            <article className="artwork-card">
                <Link href={`/artwork/${artwork.id}`}>
                    <ArtworkImage src={artwork.image} title={artwork.title} />
                    <h3>{artwork.title}</h3>
                </Link>
                <p>{artwork.artist}</p>
                {artwork.date && <p className="muted">{artwork.date}</p>}
            </article>
        </li>
    );
}