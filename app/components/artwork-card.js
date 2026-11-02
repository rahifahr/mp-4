import Link from "next/link";
import ArtworkImage from "./artwork-image";

export default function ArtworkCard({ artwork }) {
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