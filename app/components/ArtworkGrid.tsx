import ArtworkCard from "./ArtworkCard";
import type { Artwork } from "../lib/types";

type ArtworkGridProps = {
    artworks: Artwork[];
};

export default function ArtworkGrid({ artworks }: ArtworkGridProps) {
    return (
        <ul className="artwork-grid">
            {artworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
        </ul>
    );
}