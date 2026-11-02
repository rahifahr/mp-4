import ArtworkCard from "./artwork-card";

export default function ArtworkGrid({ artworks }) {
    return (
        <ul className="artwork-grid">
            {artworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
        </ul>
    );
}